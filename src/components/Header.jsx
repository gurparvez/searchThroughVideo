import React from 'react';
import { ButtonRed, ToggleTheme } from './index.js';
import { logo } from '../assets/index.js';
import { NavLink } from 'react-router-dom';

const Header = ({ classname }) => {
  return (
    <div className={`flex flex-row justify-between items-center ${classname}`}>
      <NavLink to='/'>
        <div className='w-12 flex flex-row items-center *:px-1 cursor-pointer'>
          <h6>SEARCH THROUGH VIDEO</h6>
          <img src={logo} alt='image' />
        </div>
      </NavLink>
      <div className='flex *:px-5'>
        <ToggleTheme />
        <ButtonRed data='Logout' classname='text-lg' />
      </div>
    </div>
  );
};
export default Header;
