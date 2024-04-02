import React from 'react';
import { ButtonRed, Logo, ToggleTheme } from './index.js';
import { NavLink } from 'react-router-dom';

const Header = ({ classname }) => {
    return (
        <div
            className={`flex flex-row justify-between items-center ${classname}`}>
            <NavLink to='/'>
                <Logo classname='h-10 cursor-pointer' />
            </NavLink>
            <div className='flex'>
                <ToggleTheme />
            </div>
        </div>
    );
};
export default Header;
