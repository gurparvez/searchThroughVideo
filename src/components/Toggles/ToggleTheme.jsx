import React, { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

const ToggleTheme = ({ classname }) => {
    const [themeMode, setThemeMode] = useState('dark');

    const lightMode = () => {
        setThemeMode('dark');
    };

    const darkMode = () => {
        setThemeMode('light');
    };

    const onChangeTheme = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            lightMode();
        } else {
            darkMode();
        }
    };

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);

    return (
        <>
            <label
                className={`inline-flex cursor-pointer items-center ${classname}`}>
                <input
                    type='checkbox'
                    value=''
                    className='peer sr-only'
                    onChange={onChangeTheme}
                    checked={themeMode === 'dark'}
                />
                {themeMode === 'dark' ? (
                    <MdDarkMode size={'30px'} />
                ) : (
                    <MdLightMode size={'30px'} />
                )}
                <span className='ms-3 hidden text-lg font-medium text-gray-900 dark:text-gray-300 sm:inline'>
                    Theme
                </span>
            </label>
        </>
    );
};

export default ToggleTheme;
