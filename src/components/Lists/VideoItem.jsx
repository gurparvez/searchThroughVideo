import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import { CheckBox } from '../index.js';

const VideoItem = ({
    video,
    classname = '',
    isSelected = false,
    onSelect,
    inProcessing = false,
    progress = 0,
    props,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCheckBoxChange = () => {
        onSelect(video?.id);
    };

    return (
        <div
            className={`${inProcessing ? 'pointer-events-none opacity-70' : ''} ${classname} ${isHovered ? 'bg-gray-300 dark:bg-gray-800' : ''} w-full px-4 py-2 border-b border-gray-200 transition-all first:rounded-t-lg last:rounded-b-lg last:border-none dark:border-gray-400`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}>
            <div className='w-full flex flex-row *:mr-3'>
                <CheckBox
                    id={video?.id}
                    checked={isSelected}
                    onChange={handleCheckBoxChange}
                    classname={isHovered ? 'visible' : 'invisible'}
                />
                <label htmlFor={video?.id} className='w-full'>
                    {video.title}
                </label>
            </div>

            {inProcessing && <ProgressBar progress={progress} />}
        </div>
    );
};
export default VideoItem;
