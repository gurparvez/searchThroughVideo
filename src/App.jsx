import React, { useEffect, useState } from 'react';
import { FullPage, Header, Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import auth from './api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/authSlice';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!user) {
            try {
                auth.getUser()
                    .then((user) => {
                        dispatch(login(user));
                    })
                    .catch((error) => {
                        console.log(error);
                        navigate('/login');
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } catch (error) {
                console.log('Error :: get user ::', error);
            }
        }
    }, [user]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Header
                toggleSidebar={toggleSidebar}
                classname='bg-gray-300 p-7 dark:bg-gray-900 shadow-2xl text-lg'
            />
            {/*TODO: Add a hamburger icon to sidebar in mobile view*/}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {isLoading ? (
                <FullPage />
            ) : (
                <div className='fixed bottom-0 left-0 right-0 top-20 overflow-auto sm:top-24 md:left-52'>
                    <Outlet />
                </div>
            )}
        </>
    );
}

export default App;
