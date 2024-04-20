import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import { Container, Spinner } from '../components/index.js';
import Video from '../components/Video.jsx';
import video from '../api/videos.js';

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

    const videoSrc =
        '../../public/Big projects are ditching TypeScript… why_.mp4';
    const SubsSrc =
        '../../public/[Views4You - English (auto-generated)] Big projects are ditching TypeScript… why_.srt';

    return (
        <Container>
            <div className='w-full flex flex-col sm:flex-row *:p-4'>
                {loading ? (
                    <div className='w-full relative flex justify-center items-center h-80 bg-gray-900'>
                        <Spinner
                            left='left-[45%]'
                            top='top-[45%]'
                            classname=''
                        />
                    </div>
                ) : (
                    <Video src={videoDetails?.url} subsSrc={SubsSrc} />
                )}
                <SearchBar />
            </div>
        </Container>
    );
};
export default ShowVideo;
