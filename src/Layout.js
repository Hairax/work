import React from 'react';
import Sidebar from './componentes/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-20 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
