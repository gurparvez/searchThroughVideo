import React, { useEffect, useState } from 'react';
import video from '../api/videos';
import { Container, FullPage, VideosList, ShowError } from '../components';

const InProgress = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [err, setErr] = useState(null);

    const getData = () => {
        setLoading(true);
        setData(null);
        setErr(null);
        video
            .getInProcess()
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
                setErr(err.response?.data?.detail);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            {loading && (
                <div>
                    <FullPage
                        zIndex='z-0'
                        top='top-24'
                        left='left-0 md:left-52'
                        right='right-4 sm:right-0'
                        bottom='bottom-0'
                    />
                </div>
            )}

            {err && (
                <div>
                    <ShowError error={err} />
                </div>
            )}

            {data?.length === 0 ? (
                <div>
                    <ShowError
                        error='All files are Processed !'
                        classname='text-green-500 text-xl p-4'
                    />
                </div>
            ) : (
                <VideosList videos={data} />
            )}
        </Container>
    );
};

export default InProgress;
