import React from 'react';

const Container = ({ children, classname = '' }) => {
    return (
        <div className={`w-full px-4 py-10 *:my-5 sm:p-10 ${classname}`}>
            {children}
        </div>
    );
};
export default Container;
