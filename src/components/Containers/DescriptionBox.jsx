import React from 'react';

const DescriptionBox = ({ description }) => {
    return (
        <div className='w-full rounded-lg border border-gray-400 bg-gray-200 p-2 dark:border-gray-700 dark:bg-gray-900'>
            <p className='font-semibold text-gray-400 dark:text-gray-600'>
                Description
            </p>
            <p>{description}</p>
        </div>
    );
};
export default DescriptionBox;
