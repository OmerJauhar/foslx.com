import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import linkedinIcon from '../images/linkedin-svg.svg';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        window.addEventListener('load', function () {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://widget.clutch.co/static/js/widget.js';
            document.body.appendChild(script);

            script.onload = function () {
                // The script is loaded and now you can render the widget
                var clutchWidget = document.querySelector('.clutch-widget');
                if (clutchWidget) {
                    clutchWidget.style.display = 'block';
                    // clutchWidget.style.visibility = "visible" // Ensure it's visible after loading
                }
            };
        });
    }, []);
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-black border-t border-b py-0">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-black p-8 bg-black text-white text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-4xl mb-4">FOSLX</h3>
                                <div class="clutch-widget bg-white p-4 rounded-lg" data-url="https://widget.clutch.co" data-widget-type="2" data-height="45" data-nofollow="true" data-expandifr="true" data-scale="120" data-clutchcompany-id="2473122"></div>
                                <div className='text-md font-medium text-white'>
                                    <h5>Peshawar KPK, Pakistan</h5>

                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-white text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-white text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">AI Enabled Tools</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="#" className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-white">
                            <div className="text-xl mb-6 uppercase">
                                Stay Connected
                            </div>

                            <div className="text-md font-medium mb-6">
                                We’d love to connect with you!
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center   rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" style={{ width: '24px', height: '24px', marginRight: '8px', fill: 'currentcolor' }} />
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-black hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <HashLink
                                    to="#"
                                    className=" hover:text-gray-900"
                                >
                                    FOSL X
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}
export default Footer;
