import React from 'react';
import Sidebar from './componentes/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido de la página */}
      <div className="flex-1 ml-20 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
