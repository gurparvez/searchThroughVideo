import React from 'react';

const Button = ({
    data = 'button',
    type = 'button',
    bg = 'bg-blue-700',
    bgDark = 'bg-blue-600',
    classname,
    ...props
}) => {
    return (
        <button
            type={type}
            className={`text-white ${bg} hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:${bgDark} dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800 ${classname}`}
            {...props}>
            {data}
        </button>
    );
};
export default Button;
