import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdHome, MdBookmark, MdPlayArrow, MdNoteAlt } from 'react-icons/md';

function Sidebar() {
  const location = useLocation();

  const getIconClass = (path) => {
    return location.pathname === path
      ? 'bg-blue-600 text-white'
      : 'bg-transparent text-gray-400';
  };

  const menuItems = [
    { href: '/', icon: <MdHome className="w-6 h-6" />, label: 'Home' },
    { href: '/services', icon: <MdPlayArrow className="w-6 h-6" />, label: 'Services' },
    { href: '/about', icon: <MdBookmark className="w-6 h-6" />, label: 'About' },
    { href: '/references', icon: <MdNoteAlt className="w-6 h-6" />, label: 'References' },
  ];

  return (
    <nav className="fixed top-0 left-1 h-screen w-20 bg-gradient-to-t from-indigo-900 to-blue-800 text-white flex flex-col items-center py-8 rounded-2xl shadow-xl">
      <div className="mb-8">
        <div className="text-center text-xs font-semibold tracking-wide text-gray-200">
          <img src="/logoAba.jpg" alt="logo" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <ul className="flex flex-col items-center space-y-6">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className={`flex items-center justify-center w-12 h-12 rounded-full ${getIconClass(item.href)}`}
            >
              {item.icon}
            </a>
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
