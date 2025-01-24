import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import linkedinIcon from '../images/linkedin-svg.svg';
import { useEffect } from 'react';

const Footer = () => {
    // useEffect(() => {
    //     let script;
    //     const timer = setTimeout(() => {
    //         try {
    //             script = document.createElement('script');
    //             script.type = 'text/javascript';
    //             script.src = 'https://widget.clutch.co/static/js/widget.js';
    //             script.async = true;
    //             document.body.appendChild(script);

    //             script.onload = () => {
    //                 const clutchWidget = document.querySelector('.clutch-widget');
    //                 if (clutchWidget) {
    //                     clutchWidget.style.display = 'block';
    //                     // Optionally call any initialization function if needed
    //                     // window.CLUTCHCO.Init(); // Uncomment if there's an init function
    //                 }
    //             };
    //         } catch (error) {
    //             console.error('Error loading Clutch widget:', error);
    //             // Implement a fallback or retry logic here
    //         }
    //     }, 2000); // Increase the delay as needed

    //     // Clean up the timer on unmount
    //     return () => {
    //         clearTimeout(timer);
    //         if (script) {
    //             document.body.removeChild(script);
    //         }
    //     };
    // }, []);
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
                                {/* <div
                                    className="clutch-widget  bg-white p-4 rounded-lg"
                                    data-url="https://widget.clutch.co"
                                    data-widget-type="2"
                                    data-height="45"
                                    data-nofollow="true"
                                    data-expandifr="true"
                                    data-scale="100"
                                    data-clutchcompany-id="2473122"
                                    style={{ display: 'none' }} // Initially hide until loaded
                                ></div> */}
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
                                We'd love to connect with you!
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li className="ml-4">
                                        <a href="https://www.linkedin.com/company/foslx" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-black  w-8  mx-1 text-center pt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                        </a>

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
