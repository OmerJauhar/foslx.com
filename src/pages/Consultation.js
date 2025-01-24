import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const ConsultationPage = () => {
    useEffect(() => {
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-center">
                <div id='consultation' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                        <h1 className="font-bold text-center lg:text-center text-black uppercase text-4xl">Book Your Consultation</h1>
                        <div className="calendly-inline-widget"
                            data-url="https://calendly.com/p218055-pwr/30min?&primary_color=cdcfd3"
                            style={{ minWidth: '320px', height: '700px' }}>
                        </div>
                    </div>
                </div>
                <div className="mb-12 flex justify-center">
                    <Link to="/" className="text-white bg-black hover:bg-gray-900 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                        <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.293 16.293a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l4.879 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                        </svg>

                        Back to Home

                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ConsultationPage;

