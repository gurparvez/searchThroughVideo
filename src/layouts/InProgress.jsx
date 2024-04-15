import React, { useEffect, useState } from 'react';
import video from '../api/videos';
import { Container, FullPage, List, ShowError, VideoItem } from '../components';

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

            <List>
                {data?.length === 0 ? (
                    <div>
                        <ShowError error='All files are Processed !' classname='text-green-500 p-4' />
                    </div>
                ) : (
                    data?.map((video) => (
                        <VideoItem
                            key={video?.id}
                            classname='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                            {video?.title}
                        </VideoItem>
                    ))
                )}
            </List>
        </Container>
    );
};

export default InProgress;
