import React from 'react';

const ProgressBar = ({ progress = 0, classname = '' }) => {
    return (
        <div
            className={`w-full rounded-full bg-gray-200 dark:bg-gray-700 ${classname}`}
        >
            <div
                className='rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100'
                style={{ width: `${progress}%` }}
            >
                {' '}
                {progress}%
            </div>
        </div>
    );
};

export default ProgressBar;
