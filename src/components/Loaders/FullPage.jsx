import React from 'react';

const FullPage = ({ zIndex = 'z-10' }) => {
    return (
        <div className={`fixed ${zIndex} w-screen h-screen bg-[#00000066]`}>
            <div className='flex space-x-2 justify-center items-center  w-full h-full'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce'></div>
            </div>
        </div>
    );
};

export default FullPage;
