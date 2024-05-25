import React from 'react';
import { Logo, ToggleTheme } from './index.js';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar, classname }) => {
    return (
        <div className='fixed w-full top-0 z-50'>
            <div
                className={`flex flex-row justify-between items-center ${classname}`}>
                <div className='flex flex-row items-center justify-center *:mx-5 '>
                    <FaBars
                        className='text-2xl cursor-pointer md:hidden first:ml-0'
                        onClick={toggleSidebar}
                    />
                    <NavLink to='/'>
                        <Logo classname='h-6 sm:h-10 cursor-pointer' />
                    </NavLink>
                </div>
                <div className='flex'>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    );
};
export default Header;
