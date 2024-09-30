import React from "react";

function HeaderMobile({ isOpen }) {
    return (
        <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
            <ul className="flex flex-col items-center space-y-4 mt-4">
                <li><a href="/" className="text-gray-800 dark:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-800 dark:text-white">About</a></li>
                <li><a href="/services" className="text-gray-800 dark:text-white">Services</a></li>
            </ul>
        </div>
    );
}

export default HeaderMobile;
