import React from 'react';
import { ButtonRed, Logo, ToggleTheme } from './index.js';
import { NavLink } from 'react-router-dom';

const Header = ({ classname }) => {
    return (
        <div className='fixed w-full top-0 z-50'>
            <div
            className={`flex flex-row justify-between items-center ${classname}`}>
            <NavLink to='/'>
                <Logo classname='h-6 sm:h-10 cursor-pointer' />
            </NavLink>
            <div className='flex'>
                <ToggleTheme />
            </div>
        </div>
        </div>
    );
};
export default Header;
