import React from 'react';
import { Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header classname='bg-gray-300 p-7 dark:bg-gray-900 shadow-2xl text-lg' />
      {/* TODO 2: add a sidebar component */}
      <Outlet />
      {/* TODO 3: add a footer component*/}
    </>
  );
}

export default App;
