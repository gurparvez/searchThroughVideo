import React, { forwardRef, useId } from 'react';

function Input(
    {
        label = 'input',
        type = 'text',
        className = '',
        error = '',
        readonly = false,
        required = true,
        ...props
    },
    ref,
) {
    const id = useId();

    return (
        <>
            {/* <div class='w-full'>
                <div class='relative w-full min-w-[150px] h-10'>
                    <input
                        class='peer w-full h-full bg-transparent text-gray-100 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-700 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-400'
                        placeholder=' '
                    />
                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                        Username
                    </label>
                </div>
            </div> */}
            <div>
                <label
                    for='confirm-password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    {label}
                </label>
                <input
                    type='confirm-password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder={label}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required={required}
                />
            </div>
        </>
    );
}

export default forwardRef(Input);
