import React, { useEffect, useState } from 'react';
import { FullPage, Header, Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import auth from './api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const currUser = () => {
    //     setIsLoading(true);

    //     auth.getUser()
    //         .then(() => {
    //             dispatch(login(user));
    //         })
    //         .catch(() => {
    //             navigate('/login');
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // };

    // const user = useSelector((state) => state.auth.userData);

    // useEffect(() => {
    //     if (!user) {
    //         currUser();
    //     }
    // }, [user]);

    return (
        <>
            <Header classname='bg-gray-300 p-7 dark:bg-gray-900 shadow-2xl text-lg' />
            <Sidebar />

            
            {isLoading ? <FullPage /> : 
            <div className='fixed top-20 sm:top-24 left-0 md:left-52'>
                <Outlet />
            </div>
            }

            {/* TODO 3: add a footer component*/}
        </>
    );
}

export default App;
