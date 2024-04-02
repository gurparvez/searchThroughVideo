import React from 'react';
import { logo } from '../assets';

const Logo = ({classname=""}) => {
    return (
        <div className={`w-full flex flex-row items-center justify-center ${classname}`}>
            <h6 className='w-16'>SEARCH THROUGH VIDEO</h6>
            <img src={logo} alt='image' className='h-16 px-2' />
        </div>
    );
};

export default Logo;
