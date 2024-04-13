import React, { useEffect, useState } from 'react';
import { FullPage, Header, Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import auth from './api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/authSlice';

function App() {
    const [isLoading, setIsLoading] = useState(true);
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

    return (
        <>
            <Header classname='bg-gray-300 p-7 dark:bg-gray-900 shadow-2xl text-lg' />
            {/*TODO: Add a hamburger icon to sidebar in mobile view*/}
            <Sidebar />

            {isLoading ? (
                <FullPage />
            ) : (
                <div className='fixed right-0 bottom-0 overflow-auto top-20 sm:top-24 left-0 md:left-52'>
                    <Outlet />
                </div>
            )}

            {/* TODO 3: add a footer component*/}
        </>
    );
}

export default App;
