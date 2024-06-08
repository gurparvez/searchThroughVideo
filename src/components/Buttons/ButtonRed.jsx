import React from 'react';

const ButtonRed = ({ children, type = 'button', classname, ...props }) => {
    return (
        <button
            type={type}
            className={`rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ${classname}`}
            {...props}
        >
            {children}
        </button>
    );
};
export default ButtonRed;
