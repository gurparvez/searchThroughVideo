import React, { useEffect, useState } from 'react';
import { Header } from './components';
import { Outlet } from 'react-router-dom';
import auth from './api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currUser = () => {
        setIsLoading(true);

        auth.getUser()
            .then(() => {
                dispatch(login(user));
            })
            .catch(() => {
                navigate('/login');
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const user = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!user) {
            currUser();
        }
    }, [user]);

    return (
        <>
            <Header classname='bg-gray-300 p-7 dark:bg-gray-900 shadow-2xl text-lg' />
            {/* TODO 2: add a sidebar component */}

            {isLoading ? 'full page Loading... component' : <Outlet />}

            {/* TODO 3: add a footer component*/}
        </>
    );
}

export default App;
