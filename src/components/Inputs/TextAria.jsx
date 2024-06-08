import React, { forwardRef, useId } from 'react';

const TextAria = (
    {
        label = 'Your message',
        rows = 4,
        classname = '',
        value = '',
        onchange,
        required = true,
        props,
    },
    ref,
) => {
    const id = useId();
    return (
        <div>
            <label
                htmlFor={id}
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
            >
                {label}
            </label>
            <textarea
                ref={ref}
                id={id}
                rows={rows}
                value={value}
                onChange={onchange}
                required={required}
                {...props}
                className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${classname}`}
                placeholder='Write your thoughts here...'
            />
        </div>
    );
};
export default forwardRef(TextAria);
