import React from 'react';
import { FullPage, VideoItem } from '../index.js';

const VideosList = ({
    children,
    loading,
    videos,
    selectedVideos = [],
    setSelectedVideos,
}) => {
    const handleSelect = (videoId) => {
        if (selectedVideos.includes(videoId)) {
            setSelectedVideos(selectedVideos.filter((id) => id !== videoId));
        } else {
            setSelectedVideos([...selectedVideos, videoId]);
        }
    };

    return (
        <ul className='w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
            {loading && (
                <div>
                    <FullPage
                        zIndex='z-0'
                        top='top-96'
                        left='left-4 sm:left-10 md:left-[15.5rem]'
                        right='right-4 sm:right-10'
                        bottom='bottom-10'
                    />
                </div>
            )}
            {videos?.map((video) => (
                <VideoItem
                    key={video?.id}
                    video={video}
                    onSelect={handleSelect}
                    isSelected={selectedVideos.includes(video?.id)}
                />
            ))}
            {children}
        </ul>
    );
};

export default VideosList;