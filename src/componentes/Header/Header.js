import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MdHome, MdBookmark, MdPlayArrow, MdNoteAlt } from 'react-icons/md';
import logoAba from './logoAba.jpg';

function Sidebar() {
  const location = useLocation();

  const getIconClass = (path) => {
    return location.pathname === path
      ? 'bg-blue-600 text-white'
      : 'bg-transparent text-gray-400';
  };

  return (
    <nav className="fixed top-0 left-1 h-screen w-20 bg-gradient-to-t from-indigo-900 to-blue-800 text-white flex flex-col items-center py-8 rounded-2xl shadow-xl">
      <div className="mb-8">
        <div className="text-center text-xs font-semibold tracking-wide text-gray-200">
          <img src={logoAba} alt="logo" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <ul className="flex flex-col items-center space-y-6">
        {/* Home */}
        <li className="relative">
          <Link to="/" className={`flex items-center justify-center w-12 h-12 rounded-full ${getIconClass('/')}`}>
            <MdHome className="w-6 h-6" />
          </Link>
        </li>

        {/* Services */}
        <li className="relative">
          <Link to="/services" className={`flex items-center justify-center w-12 h-12 rounded-full ${getIconClass('/services')}`}>
            <MdPlayArrow className="w-6 h-6" />
          </Link>
        </li>

        {/* About */}
        <li className="relative">
          <Link to="/about" className={`flex items-center justify-center w-12 h-12 rounded-full ${getIconClass('/about')}`}>
            <MdBookmark className="w-6 h-6" />
          </Link>
        </li>

        {/* References */}
        <li className="relative">
          <Link to="/references" className={`flex items-center justify-center w-12 h-12 rounded-full ${getIconClass('/references')}`}>
            <MdNoteAlt className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
