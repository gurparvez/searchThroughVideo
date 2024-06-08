import React, { useState } from 'react';
import { Button, Input, Logo, ShowError, Spinner } from '../components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../api/auth';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const submit = async (data) => {
        setIsLoading(true);
        setError(false);
        setMsg('');

        try {
            auth.register(data)
                .then(() => {
                    setIsLoading(true);
                    auth.login({
                        username: data.username,
                        password: data.password,
                    })
                        .then(() => {
                            navigate('/');
                        })
                        .catch((err) => {
                            console.log('err: ');
                            console.log(err);
                            navigate('/login');
                        })
                        .finally(() => {
                            setIsLoading(false);
                        });
                })
                .catch((err) => {
                    setError(true);
                    const error = err.response?.data?.detail;
                    if (typeof error === 'string') {
                        setMsg(error);
                    } else {
                        setMsg('Internal Server error !');
                    }
                    setIsLoading(false);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (error) {
            console.log('Error :: register user ::', error);
        }
    };

    return (
        <section
            className={`relative bg-gray-50 dark:bg-gray-900 ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
            {isLoading && <Spinner />}
            <div className='mx-auto flex h-screen flex-col items-center justify-center py-8 lg:py-0'>
                <Logo classname='mb-6 text-xl font-semibold' />
                <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
                    <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
                            Create an Account
                        </h1>
                        <form
                            onSubmit={handleSubmit(submit)}
                            className='space-y-4 md:space-y-6'>
                            <Input
                                label='Email'
                                type='email'
                                error={error}
                                readonly={isLoading}
                                {...register('email', {
                                    required: true,
                                })}
                            />
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
                                data='Create Account'
                                type='submit'
                                bg={isLoading ? 'bg-blue-900' : 'bg-blue-700'}
                                bgDark={
                                    isLoading ? 'bg-blue-800' : 'bg-blue-600'
                                }
                                classname='w-full'
                            />
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                Already have an account?{' '}
                                <NavLink
                                    to='/login'
                                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                                    Login here
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
