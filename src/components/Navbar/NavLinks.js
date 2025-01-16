import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-black" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-black" smooth to="/#services">
                Services
            </HashLink>
            <Link to="/blog" className="px-4 font-extrabold text-gray-500 hover:text-black">
                Blog
            </Link>
            <Link to="/consultation" className="text-white bg-black hover:bg-gray-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                Free Consultation
                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>

        </>
    )
}

export default NavLinks;
