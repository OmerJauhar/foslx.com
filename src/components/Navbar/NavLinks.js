import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-black" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-black" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-black" smooth to="/blog#blog">
                Blog
            </HashLink>
            <HashLink className="text-white bg-black hover:bg-gray-500 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
