import React from 'react';

const Spinner = ({ top = 'top-3', left = 'left-3', classname = '' }) => {
    return (
        <div
            className={`${classname} absolute ${top} ${left} h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
            role='status'></div>
    );
};

export default Spinner;
