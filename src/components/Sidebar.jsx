import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonRed from './Buttons/ButtonRed';
import auth from '../api/auth';
import FullPage from './Loaders/FullPage';

const Sidebar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const logoutHandler = () => {
        setIsLoading(true);

        auth.logout()
            .then(() => {
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
                className='fixed left-0 top-10 z-0 w-52 h-screen pt-20 transition-transform -translate-x-full bg-gray-300 border-r border-gray-200 md:translate-x-0 dark:bg-gray-900 dark:border-gray-700'
                aria-label='Sidebar'>
                <div className='h-full bg-gray-300 px-3 pb-14 overflow-y-auto dark:bg-gray-900'>
                    <ul className='h-full flex flex-col space-y-2 font-medium justify-between'>
                        <div>
                            <li>
                                <a
                                    href='#'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='ms-3'>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='flex-1 ms-3 whitespace-nowrap'>
                                        Recently Uploaded
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                                    <span className='flex-1 ms-3 whitespace-nowrap'>
                                        In Progress
                                    </span>
                                </a>
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
        </>
    );
};

export default Sidebar;
