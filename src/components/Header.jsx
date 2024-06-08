import React from 'react';
import { Logo, ToggleTheme } from './index.js';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar, classname }) => {
    return (
        <div className='fixed top-0 z-50 w-full'>
            <div
                className={`flex flex-row items-center justify-between ${classname}`}
            >
                <div className='flex flex-row items-center justify-center *:mx-5'>
                    <FaBars
                        className='cursor-pointer text-2xl first:ml-0 md:hidden'
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
