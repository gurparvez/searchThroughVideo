import React, { useState } from 'react';
import { Button, Input, Logo, ShowError, Spinner } from '../components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../api/auth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const submit = async (data) => {
        setError(false);
        setMsg('');
        setIsLoading(true);
        try {
            const res = await auth.login(data);
            if (res) {
                setIsLoading(false);
                navigate('/');
            } else {
                setError(true);
                setMsg(res.detail);
                setIsLoading(false);
            }
        } catch (error) {
            setError(true);
            setMsg(error);
            console.log('Error :: login user ::', error);
            setIsLoading(false);
        }
    };

    return (
        <section
            className={`relative bg-gray-50 dark:bg-gray-900 ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            {isLoading && <Spinner />}
            <div className='flex flex-col items-center justify-center py-8 mx-auto h-screen lg:py-0'>
                <Logo classname='mb-6 text-xl font-semibold' />
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Login
                        </h1>
                        <form
                            onSubmit={handleSubmit(submit)}
                            className='space-y-4 md:space-y-6'>
                            <Input
                                label='Username'
                                error={error}
                                readonly={isLoading}
                                {...register('username', {
                                    required: true,
                                })}
                            />
                            <Input
                                label='Password'
                                type='password'
                                error={error}
                                readonly={isLoading}
                                {...register('password', {
                                    required: true,
                                })}
                            />
                            {error && <ShowError error={msg} />}
                            <Button
                                data='Login'
                                type='submit'
                                bg={isLoading ? 'bg-blue-900' : 'bg-blue-700'}
                                bgDark={
                                    isLoading ? 'bg-blue-800' : 'bg-blue-600'
                                }
                                classname='w-full'
                            />
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                Don't have an account?{' '}
                                <NavLink
                                    to='/register'
                                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                    Register here
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
