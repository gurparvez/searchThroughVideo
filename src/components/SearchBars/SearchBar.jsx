import React, { useState } from 'react';

const SearchBar = ({ onSearch, classname }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className={`mx-auto w-full ${classname}`}>
            <label
                htmlFor='default-search'
                className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
                Search
            </label>
            <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
                    <svg
                        className='h-4 w-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                    >
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
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='Type here to Search...'
                    required
                />
            </div>
        </div>
    );
};

export default SearchBar;
