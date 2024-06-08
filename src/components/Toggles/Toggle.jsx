import React from 'react';

const Toggle = ({
    checked = false,
    label = 'toggle',
    onChange,
    classname = '',
    ...props
}) => {
    return (
        <>
            <label
                className={`inline-flex cursor-pointer items-center ${classname}`}
            >
                <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    onChange={onChange}
                    checked={checked}
                    {...props}
                />
                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                <span className='ms-3 text-lg font-medium text-gray-900 dark:text-gray-300'>
                    {label}
                </span>
            </label>
        </>
    );
};

export default Toggle;
