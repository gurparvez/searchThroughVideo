import React, { useState } from 'react';

const SearchBar = ({ onSearch, classname }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className={`w-full mx-auto ${classname}`}>
            <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
                Search
            </label>
            <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <svg
                        className='w-4 h-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'>
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                    </svg>
                </div>
                {/*TODO: type='search' adds a cross, which is not quite visible in dark mode and we need to use css to access it's style:- input[type="search"]::-webkit-search-cancel-button. Not sure how to do it in tailwind*/}
                <input
                    type='text'
                    id='default-search'
                    value={searchValue}
                    onChange={handleInputChange}
                    className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Search From the Uploaded Videos ...'
                    required
                />
            </div>
        </div>
    );
};

export default SearchBar;
