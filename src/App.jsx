import React from 'react';
import { ToggleTheme } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* TODO 1: add a header component*/}
      {/* TODO 2: add a sidebar component */}
      <ToggleTheme />
      <Outlet />
      {/* TODO 3: add a footer component*/}
    </>
  );
}

export default App;
