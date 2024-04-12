import { Button, List, VideoItem } from '../components/index.js';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import videos from '../api/videos.js';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [msg, setMsg] = useState(null);

    const [videoData, setVideoData] = useState(null);

    const getVideos = () => {
        try {
            videos
                .getAll()
                .then((videos) => {
                    console.log(videos);
                })
                .catch((err) => {
                    console.log(err);
                    setMsg(err);
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
