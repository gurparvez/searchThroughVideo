import React from 'react';

// TODO: Close the popup
const ErrorPopup = ({ error = 'There was an error! Try reloading...' }) => {
    return (
        <div
            id='toast-danger'
            className='absolute left-[37%] top-0 z-20 mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-900 dark:text-gray-400'
            role='alert'
        >
            <div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'>
                <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z' />
                </svg>
                <span className='sr-only'>Error icon</span>
            </div>
            <div className='ms-3 text-sm font-normal'>{error}</div>
            <button
                type='button'
                className='-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white'
                data-dismiss-target='#toast-danger'
                aria-label='Close'
            >
                <span className='sr-only'>Close</span>
                <svg
                    className='h-3 w-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                >
                    <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                </svg>
            </button>
        </div>
    );
};
export default ErrorPopup;
