import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';


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
            <div id='consultation' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <h1 className="font-bold text-center lg:text-center text-black uppercase text-4xl">Book Your Consultation</h1>
                    <div className="calendly-inline-widget"
                        data-url="https://calendly.com/p218055-pwr/30min?&primary_color=cdcfd3"
                        style={{ minWidth: '320px', height: '700px' }}>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ConsultationPage;

