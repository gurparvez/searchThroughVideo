import { Button, Container, VideosList } from '../components/index.js';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import videos from '../api/videos.js';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { put } from '../store/videoSlice.js';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const dispatch = useDispatch();

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
                    setMsg(err);
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

    return (
        <Container>
            <SearchBar onSearch={handleSearch} />
            <NavLink to={'upload'}>
                <Button data='Upload New' classname='w-full sm:w-48' />
            </NavLink>
            {msg && (
                <div>
                    <p>{msg}</p>
                </div>
            )}
            <h3>My Videos</h3>
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
