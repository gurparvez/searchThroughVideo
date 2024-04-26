import React from 'react';

const DescriptionBox = ({ description }) => {
    return (
        <div className='w-full border border-gray-400 p-2 rounded-lg bg-gray-200 dark:bg-gray-900 dark:border-gray-700'>
            <p className='text-gray-400 dark:text-gray-600 font-semibold'>
                Description
            </p>
            <p>{description}</p>
        </div>
    );
};
export default DescriptionBox;
