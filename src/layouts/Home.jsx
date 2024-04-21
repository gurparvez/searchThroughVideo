import {
    Button,
    ButtonRed,
    Container,
    VideosList,
} from '../components/index.js';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import videos from '../api/videos.js';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVideo, put } from '../store/videoSlice.js';
import video from '../api/videos.js';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    const data = useSelector((state) => state.videos.videoData);

    const getVideos = () => {
        if (data) {
            setVideoData(data);
            return;
        }
        try {
            setLoading(true);
            videos
                .getAll()
                .then((videos) => {
                    dispatch(put(videos));
                    setVideoData(videos);
                })
                .catch((err) => {
                    console.log(err);
                    setMsg(err.response?.data?.detail);
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (err) {
            console.log('Error :: home :: get all videos :: ', err);
        }
    };

    useEffect(() => {
        if (!videoData) {
            getVideos();
        }
    }, [videoData]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredVideos = videoData?.filter((video) =>
        video?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const deleteVideos = () => {
        try {
            setError(false);
            selectedVideos.map((videoPath) => {
                setLoading(true);
                console.log(videoPath);
                video
                    .delete(videoPath)
                    .then((res) => {
                        console.log(res);
                        dispatch(deleteVideo(videoPath));
                    })
                    .catch((err) => {
                        console.log(err);
                        setError(true);
                    })
                    .finally(() => {
                        setSelectedVideos([]);
                        setLoading(false);
                    });
            });
        } catch (err) {
            console.log('Error :: Home :: deleteVideos :: ', err);
        }
    };

    const handleDeleteVideos = async () => {
        await deleteVideos();
    };

    return (
        <Container classname='transition-all'>
            <SearchBar onSearch={handleSearch} />
            <NavLink to={'upload'}>
                <Button data='Upload New' classname='w-full sm:w-48' />
            </NavLink>
            {msg && (
                <div>
                    <p>{msg}</p>
                </div>
            )}
            <div className='flex flex-row justify-between'>
                <h3>My Videos</h3>
                {selectedVideos.length > 0 && (
                    <ButtonRed children='Delete' onClick={handleDeleteVideos} />
                )}
            </div>
            <VideosList
                videos={filteredVideos}
                loading={loading}
                selectedVideos={selectedVideos}
                setSelectedVideos={setSelectedVideos}
            />
        </Container>
    );
};

export default Home;
