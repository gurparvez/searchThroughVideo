import React from 'react';

const FullPage = ({
    zIndex = 'z-10',
    top = 'top-0',
    left = 'left-0',
    right = 'right-0',
    bottom = 'bottom-0',
}) => {
    return (
        <div
            className={`absolute ${zIndex} ${top} ${left} ${right} ${bottom} bg-[#00000066]`}
        >
            <div className='flex h-full w-full items-center justify-center space-x-2'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.3s] dark:bg-gray-400'></div>
                <div className='h-8 w-8 animate-bounce rounded-full bg-gray-600 [animation-delay:-0.15s] dark:bg-gray-400'></div>
                <div className='h-8 w-8 animate-bounce rounded-full bg-gray-600 dark:bg-gray-400'></div>
            </div>
        </div>
    );
};

export default FullPage;
