import React, { forwardRef, useId } from 'react';

function Input(
    {
        label = 'input',
        type = 'text',
        className = '',
        error = false,
        readonly = false,
        required = true,
        ...props
    },
    ref,
) {
    const id = useId();

    return (
        <>
            <div>
                <label
                    htmlFor={id}
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    type='confirm-password'
                    name='confirm-password'
                    placeholder={label}
                    className={`${error ? 'border-red-600 border-2' : ''} ${readonly ? 'opacity-50 cursor-not-allowed' : ''} bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    required={required}
                    {...props}
                />
            </div>
        </>
    );
}

export default forwardRef(Input);
