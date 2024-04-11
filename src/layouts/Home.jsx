import { Button, List } from '../components/index.js';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBars/SearchBar.jsx';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [videoData, setVideoData] = useState([
        // Your JSON data containing video URLs and titles
        { id: 1, title: 'Video 1', url: 'https://example.com/video1' },
        { id: 2, title: 'Video 2', url: 'https://example.com/video2' },
        // Add more video objects as needed
    ]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className='w-full sm:p-10 py-10 px-4 *:my-5'>
            <SearchBar onSearch={handleSearch} />
            <Button data='Upload New' classname='w-full sm:w-48' />
            <List>
                {filteredVideos.map((video) => (
                    <li
                        key={video?.id}
                        className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                        {video?.title}
                    </li>
                ))}
            </List>
        </div>
    );
};

export default Home;
