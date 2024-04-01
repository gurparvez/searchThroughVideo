import React, { useState } from 'react';
import { Button, Input, Logo } from '../components';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form'

const Register = () => {
    const [email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const {register, handleSubmitForm} = useForm();

    return (
        <section className='bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0'>
                <Logo classname='mb-6 text-2xl font-semibold' />
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Create and account
                        </h1>
                        <form className='space-y-4 md:space-y-6'>
                            <Input
                                label='email'
                                {...register("email")}
                            />
                            <Input
                                label='Username'
                                value={Username}
                                onChange={(e) => setUsername(e.taget.value)}
                            />
                            <Input
                                label='Password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.taget.value)}
                            />
                            <Input
                                label='Confirm Password'
                                type='password'
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.taget.value)}
                            />
                            <Button
                                data='Create Account'
                                type='submit'
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
