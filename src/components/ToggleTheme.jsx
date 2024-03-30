import React, { useEffect, useState } from 'react';

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
      <label className={`inline-flex items-center cursor-pointer ${classname}`}>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          onChange={onChangeTheme}
          checked={themeMode === 'dark'}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className='ms-3 text-lg font-medium text-gray-900 dark:text-gray-300'>
          Dark Mode
        </span>
      </label>
    </>
  );
};

export default ToggleTheme;
