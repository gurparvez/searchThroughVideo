import React from 'react';

const List = ({ children }) => {
    return (
        <ul className='w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
            {children}
        </ul>
    );
};

export default List;
