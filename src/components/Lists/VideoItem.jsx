import React, { useRef, useState } from 'react';
import ProgressBar from '../ProgressBar';
import { CheckBox } from '../index.js';
import { NavLink } from 'react-router-dom';
import Check from '../../svg/Check.jsx';

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
    const dialogRef = useRef(null);

    const handleCheckBoxChange = () => {
        onSelect(video?.path);
    };

    const handleHover = () => {
        dialogRef.current.classList.remove('hidden'); // Assuming you have 'hidden' class for hiding the dialog
    };

    const handleLeave = () => {
        dialogRef.current.classList.add('hidden');
    };

    return (
        <div
            className={`${inProcessing ? 'pointer-events-none opacity-70' : ''} ${classname} ${isHovered || isSelected ? 'bg-gray-300 dark:bg-gray-800' : ''} relative w-full border-b border-gray-200 px-4 py-2 transition-all first:rounded-t-lg last:rounded-b-lg last:border-none dark:border-gray-400`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            {video?.processing && (
                <div
                    className='absolute -left-2 -top-2 z-10'
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <Check classname='hover:cursor-pointer' />
                    <div
                        ref={dialogRef}
                        className='absolute -left-5 -top-20 mt-2 hidden rounded-md bg-green-200 px-4 py-2 text-green-900 shadow-lg dark:bg-green-900 dark:text-gray-50'
                    >
                        Ready to search
                    </div>
                </div>
            )}
            <div className='flex w-full flex-row *:mr-3'>
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
                            className='hover:text-blue-600 hover:underline dark:hover:text-blue-400'
                        >
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
