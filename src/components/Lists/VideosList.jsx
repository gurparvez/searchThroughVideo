import React from 'react';
import { FullPage, VideoItem } from '../index.js';

const VideosList = ({
    children,
    loading,
    videos,
    selectedVideos = [],
    setSelectedVideos,
}) => {
    const handleSelect = (videoPath) => {
        if (selectedVideos.includes(videoPath)) {
            setSelectedVideos(
                selectedVideos.filter((path) => path !== videoPath),
            );
        } else {
            setSelectedVideos([...selectedVideos, videoPath]);
        }
    };

    return (
        <ul className='w-full relative text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
            {loading && <FullPage />}
            {videos?.map((video) => (
                <VideoItem
                    key={video?.id}
                    video={video}
                    onSelect={handleSelect}
                    isSelected={selectedVideos.includes(video?.path)}
                />
            ))}
            {children}
        </ul>
    );
};

export default VideosList;
