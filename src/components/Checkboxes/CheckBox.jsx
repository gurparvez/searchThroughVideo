import React, { forwardRef } from 'react';

const CheckBox = (
    { id = '', checked = false, classname, onChange, props },
    ref,
) => {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (
        <div className={`flex items-center ${classname}`}>
            <input
                ref={ref}
                checked={checked}
                id={id}
                onChange={handleChange}
                type='checkbox'
                value=''
                className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 hover:cursor-pointer focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                {...props}
            />
        </div>
    );
};
export default forwardRef(CheckBox);
