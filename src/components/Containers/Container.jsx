import React from 'react';

const Container = ({ children, classname = '' }) => {
    return (
        <div className={`w-full sm:p-10 py-10 px-4 *:my-5 ${classname}`}>
            {children}
        </div>
    );
};
export default Container;
