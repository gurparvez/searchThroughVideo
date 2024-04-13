import { Button, FullPage, List, VideoItem } from '../components/index.js';
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
        // TODO: Wrap in <Container></Container>
        <div className='w-full sm:p-10 py-10 px-4 *:my-5'>
            <SearchBar onSearch={handleSearch} />
            <NavLink to={'upload'}>
                <Button data='Upload New' classname='w-full sm:w-48' />
            </NavLink>
            {msg && (
                <div>
                    <p>{msg}</p>
                </div>
            )}
            <List>
                {loading && (
                    <div>
                        <FullPage
                            zIndex='z-0'
                            top='top-80'
                            left='left-4 sm:left-10 md:left-[15.5rem]'
                            right='right-4 sm:right-10'
                            bottom='bottom-10'
                        />
                    </div>
                )}
                {filteredVideos?.map((video) => (
                    <VideoItem
                        key={video?.id}
                        classname='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                        {video?.title}
                    </VideoItem>
                ))}
            </List>
        </div>
    );
};

export default Home;
