import React from 'react';
import typescript from '../images/clients/typescript.svg';
import react from '../images/clients/react-2.svg';
import protergia from '../images/clients/nodejs.svg';
import spring from '../images/clients/spring-3.svg';
import pytorch from '../images/clients/pytorch-2.svg';
import pythonlogo from '../images/clients/python-5.svg'


const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Technologies </h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-black'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black">Some of technologies used.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={typescript} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={protergia} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={pytorch} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={spring} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={react} alt="client" />                            
                        </div>
                        
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={pythonlogo} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;