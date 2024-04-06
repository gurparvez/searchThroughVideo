// Loading.js
import React from 'react';

const FullPage = () => {
    return (
        <div className='flex space-x-2 justify-center items-center bg-gray-400 dark:bg-gray-700 h-screen'>
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce'></div>
        </div>
    );
};

export default FullPage;
