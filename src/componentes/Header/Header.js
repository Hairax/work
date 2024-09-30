import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import { MdBookmark, MdHome, MdPlayArrow } from "react-icons/md";
import "./Header.css";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getIconClass = (path) => {
        return location.pathname === path ? "elevated-icon" : "";
    };

    return (
        <nav className="flex justify-center py-4">
            <div className="inline-flex items-center space-x-6 dark:bg-gray-800 bg-white rounded-full px-4 py-4">
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className={`nav-icon text-gray-800 dark:text-white flex items-center ${getIconClass("/")}`}>
                            <MdHome className="w-10 h-10" />
                        </a>
                    </li>
                    <li>
                        <a href="/about" className={`nav-icon text-gray-700 dark:text-white flex items-center ${getIconClass("/about")}`}>
                            <MdBookmark className="w-10 h-10" />
                        </a>
                    </li>
                    <li>
                        <a href="/services" className={`nav-icon text-gray-800 dark:text-white flex items-center ${getIconClass("/services")}`}>
                            <MdPlayArrow className="w-10 h-10" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Botón de menú móvil */}
            <div className="lg:hidden flex justify-center mt-2">
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Pasar isMobileMenuOpen como prop al componente HeaderMobile */}
            <HeaderMobile isOpen={isMobileMenuOpen} />
        </nav>
    );
}

export default Header;
