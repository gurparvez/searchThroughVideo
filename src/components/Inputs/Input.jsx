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
            <div>
                <label
                    for={id}
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    type='confirm-password'
                    name='confirm-password'
                    placeholder={label}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required={required}
                    {...props}
                />
            </div>
        </>
    );
}

export default forwardRef(Input);
