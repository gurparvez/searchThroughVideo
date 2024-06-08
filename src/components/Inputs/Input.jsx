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
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={label}
                    className={`${error ? 'border-2 border-red-600' : ''} ${readonly ? 'cursor-not-allowed opacity-50' : ''} block w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm`}
                    required={required}
                    {...props}
                />
            </div>
        </>
    );
}

export default forwardRef(Input);
