import React, { useState } from "react";
import HeaderMobile from "./HeaderMobile";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        console.log("Botón de menú móvil clicado");
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
                <div className="flex items-center">
                    <a href="/" className="text-lg font-semibold text-gray-800 dark:text-white">Logo</a>
                    <ul className="hidden lg:flex space-x-8 ml-10">
                        <li><a href="/" className="text-gray-800 dark:text-white">Home</a></li>
                        <li><a href="/" className="text-gray-800 dark:text-white">About</a></li>
                        <li><a href="/" className="text-gray-800 dark:text-white">Services</a></li>
                        <li><a href="/" className="text-gray-800 dark:text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="lg:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Pasar isMobileMenuOpen como prop al componente HeaderMobile */}
            <HeaderMobile isOpen={isMobileMenuOpen} />
        </nav>
    );
}

export default Header;
