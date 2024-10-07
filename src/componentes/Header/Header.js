import React from "react";
import { useLocation } from "react-router-dom";
import { MdBookmark, MdHome, MdPlayArrow } from "react-icons/md";
import "./Header.css";

function Header() {
    const location = useLocation();

    const getIconClass = (path) => {
        return location.pathname === path ? "elevated-icon" : "";
    };

    return (
        <nav className="flex justify-center py-4">
            <div className="inline-flex items-center space-x-6 dark:bg-gray-800 bg-white rounded-full px-4 py-4">
                <ul className="flex space-x-6">
                    <li className="relative group">
                        <a href="/" className={`nav-icon text-gray-800 dark:text-white flex items-center ${getIconClass("/")}`}>
                            <MdHome className="w-10 h-10" />
                        </a>
                        <span className="tooltip-text">Home</span>
                    </li>
                    <li className="relative group">
                        <a href="/about" className={`nav-icon text-gray-700 dark:text-white flex items-center ${getIconClass("/about")}`}>
                            <MdBookmark className="w-10 h-10" />
                        </a>
                        <span className="tooltip-text">About</span>
                    </li>
                    <li className="relative group">
                        <a href="/services" className={`nav-icon text-gray-800 dark:text-white flex items-center ${getIconClass("/services")}`}>
                            <MdPlayArrow className="w-10 h-10" />
                        </a>
                        <span className="tooltip-text">Services</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
