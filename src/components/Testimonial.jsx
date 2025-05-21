import React from 'react';
import {
    FaSlack,
    FaDribbble,
    FaFacebookMessenger,
    FaPinterest,
    FaBehance,
    FaTelegramPlane,
    FaSkype,
} from 'react-icons/fa';

const Testimonial  = () => {
    return (
        <section className="relative bg-gray-50 py-20 overflow-hidden text-center">
            {/* Floating Icons */}
            <FaSlack className="absolute top-10 left-1/4 text-3xl text-[#4A154B] bg-white rounded-full shadow-lg p-1" />
            <FaDribbble className="absolute top-13 right-[35%] text-3xl text-[#EA4C89] bg-white rounded-full shadow-lg p-1" />
            <FaFacebookMessenger className="absolute bottom-20 left-10 text-3xl text-[#0084FF] bg-white rounded-full shadow-lg p-1" />
            <FaPinterest className="absolute bottom-10 left-[20%] text-3xl text-[#E60023] bg-white rounded-full shadow-lg p-1" />
            <FaBehance className="absolute top-10 right-10 text-3xl text-black bg-white rounded-full shadow-lg p-1" />
            <FaTelegramPlane className="absolute bottom-10 right-1/4 text-3xl text-[#0088cc] bg-white rounded-full shadow-lg p-1" />
            <FaSkype className="absolute bottom-16 right-10 text-3xl text-[#00AFF0] bg-white rounded-full shadow-lg p-1" />

            {/* Testimonial Content */}
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Who is Using Our APP Development Service?
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                    It’s not the biggest app development agency but the most valuable agency —
                    not because they provide us the best app or web design, but because they give
                    you something special that can’t be explained in words.
                </p>
                <p className="font-semibold text-gray-800 mt-2">Sagar Howlader</p>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-700 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                </div>
            </div>
        </section>
    );
};

export default Testimonial ;
