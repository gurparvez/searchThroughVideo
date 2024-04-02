import React from 'react';

const Spinner = () => {
    return (
        <div
            className='absolute top-3 left-3 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
            role='status'>
        </div>
    );
};

export default Spinner;
