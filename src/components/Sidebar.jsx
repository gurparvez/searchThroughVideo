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
                className={`fixed bottom-0 left-0 top-24 z-40 w-52 border-r border-gray-200 bg-gray-300 pt-5 transition-transform dark:border-gray-700 dark:bg-gray-900 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
                aria-label='Sidebar'
            >
                <div className='h-full overflow-y-auto bg-gray-300 px-3 pb-5 dark:bg-gray-900'>
                    <ul className='flex h-full flex-col justify-between space-y-2 font-medium'>
                        <div>
                            <li>
                                <NavLink
                                    to='/'
                                    className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                >
                                    <span className='ms-3'>My Videos</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='recent'
                                    className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                >
                                    <span className='ms-3 flex-1 whitespace-nowrap'>
                                        Recently Uploaded
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='inProgress'
                                    className='group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                                >
                                    <span className='ms-3 flex-1 whitespace-nowrap'>
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
                    className='fixed inset-0 z-30 bg-black opacity-50 md:hidden'
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
