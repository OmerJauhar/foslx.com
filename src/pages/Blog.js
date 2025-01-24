import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
// import 'https://widget.clutch.co/static/js/widget.js';

const Blog = () => {
    useDocTitle('FOSLX | Blog');

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <h1 className="font-bold text-center lg:text-left text-black uppercase text-4xl">Blog</h1>
                    <div className="mt-8">
                        {/* Example Blog Post */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
                            <h2 className="text-2xl font-bold">Blog Post Title</h2>
                            <p className="text-gray-700 mt-2">This is a brief description of the blog post content. It can be a summary or an introduction to the topic discussed in the post.</p>
                            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
                        </div>
                        {/* Add more blog posts as needed */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;