import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ButtonRed from './Buttons/ButtonRed';
import auth from '../api/auth';
import FullPage from './Loaders/FullPage';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice.js';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        setIsLoading(true);

        auth.logout()
            .then(() => {
                dispatch(logout());
                navigate('/login');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            {isLoading && <FullPage />}
            <aside
                id='logo-sidebar'
                className={`fixed left-0 top-24 bottom-0 z-40 w-52 pt-5 transition-transform bg-gray-300 border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
                aria-label='Sidebar'>
                <div className='h-full bg-gray-300 px-3 pb-5 overflow-y-auto dark:bg-gray-900'>
                    <ul className='h-full flex flex-col space-y-2 font-medium justify-between'>
                        <div>
                            <li>
                                <NavLink
                                    to='/'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='ms-3'>My Videos</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='recent'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='flex-1 ms-3 whitespace-nowrap'>
                                        Recently Uploaded
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='inProgress'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='flex-1 ms-3 whitespace-nowrap'>
                                        In Progress
                                    </span>
                                </NavLink>
                            </li>
                        </div>
                        <div>
                            <li>
                                <ButtonRed
                                    children='Sign Out'
                                    classname='w-full'
                                    onClick={logoutHandler}
                                />
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-50 z-30 md:hidden'
                    onClick={toggleSidebar}></div>
            )}
        </>
    );
};

export default Sidebar;
