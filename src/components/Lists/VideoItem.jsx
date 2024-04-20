import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import { CheckBox } from '../index.js';
import { NavLink } from 'react-router-dom';

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
            className={`${inProcessing ? 'pointer-events-none opacity-70' : ''} ${classname} ${isHovered || isSelected ? 'bg-gray-300 dark:bg-gray-800' : ''} w-full px-4 py-2 border-b border-gray-200 transition-all first:rounded-t-lg last:rounded-b-lg last:border-none dark:border-gray-400`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}>
            <div className='w-full flex flex-row *:mr-3'>
                {!inProcessing && (
                    <CheckBox
                        id={video?.id}
                        checked={isSelected}
                        onChange={handleCheckBoxChange}
                        classname={
                            isHovered || isSelected ? 'visible' : 'invisible'
                        }
                    />
                )}
                {!inProcessing && (
                    <label htmlFor={video?.id} className='w-full'>
                        <NavLink
                            to={`/${video?.key}`}
                            className='hover:text-blue-600 hover:underline dark:hover:text-blue-400'>
                            {video.title}
                        </NavLink>
                    </label>
                )}
                {inProcessing && (
                    <div className='w-full'>
                        <p>{video.title}</p>
                    </div>
                )}
            </div>

            {inProcessing && <ProgressBar progress={progress} />}
        </div>
    );
};
export default VideoItem;
