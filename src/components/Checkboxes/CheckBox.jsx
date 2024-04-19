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
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                {...props}
            />
        </div>
    );
};
export default forwardRef(CheckBox);
