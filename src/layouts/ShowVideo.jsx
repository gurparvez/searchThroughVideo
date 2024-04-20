import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import { Container, Spinner } from '../components/index.js';
import Video from '../components/Video.jsx';
import video from '../api/videos.js';
import ErrorPopup from '../components/Popups/ErrorPopup.jsx';

const ShowVideo = () => {
    const { videoKey, ...remainingPath } = useParams();
    const fullKey = `videos/${videoKey}/${Object.values(remainingPath).join('/')}`;

    const [loading, setLoading] = useState(true);
    const [videoDetails, setVideoDetails] = useState(null);
    const [msg, setMsg] = useState(null);

    const getUrlFromId = () => {
        video
            .get(fullKey)
            .then((res) => {
                console.log(res);
                setVideoDetails(res);
            })
            .catch((err) => {
                console.log(err);
                setMsg(err.response?.data?.detail);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getUrlFromId();
    }, []);

    return (
        <Container>
            <div className='w-full flex flex-col sm:flex-row *:p-4'>
                {msg && <ErrorPopup error={msg} />}
                {loading ? (
                    <div className='w-full relative flex justify-center items-center h-80 bg-gray-900'>
                        <Spinner
                            left='left-[45%]'
                            top='top-[45%]'
                            classname=''
                        />
                    </div>
                ) : (
                    <div className='*:my-2'>
                        <Video
                            src={videoDetails?.url}
                            subsSrc={videoDetails?.subtitle[0]}
                        />
                        <h3>{videoDetails?.title}</h3>
                        <p>{videoDetails?.description}</p>
                    </div>
                )}
                <SearchBar />
            </div>
        </Container>
    );
};
export default ShowVideo;
