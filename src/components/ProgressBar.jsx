import React from 'react';

const ProgressBar = ({ progress=0, classname='' }) => {
    return (
        <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700 ${classname}`}>
            <div
                className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
                style={{width: `${progress}%`}}>
                {' '}
                {progress}%
            </div>
        </div>
    );
};

export default ProgressBar;
