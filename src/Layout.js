import React from 'react';
import Sidebar from './componentes/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
<<<<<<< HEAD
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido de la página */}
      <div className="flex-1 ml-20 p-8 overflow-y-auto">
=======
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-20 p-8">
>>>>>>> b6de3ae (desktop electron)
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
