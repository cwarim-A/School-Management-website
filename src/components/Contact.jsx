import React from "react";
import { FaMapPin, FaPhone } from "react-icons/fa";

import { FiMail } from "react-icons/fi";

// const contactInfo = [
//     {
//         id: 1,
//         icon: <FiMail className="w-6 h-6 text-[#1E40AF]" />,
//         title: "Email Us",
//         detail: "support@schoolmanagement.com",
//     },
//     {
//         id: 2,
//         icon: <FaPhone className="w-6 h-6 text-[#1E40AF]" />,
//         title: "Call Us",
//         detail: "+234 800 123 4567",
//     },
//     {
//         id: 3,
//         icon: <FaMapPin className="w-6 h-6 text-[#1E40AF]" />,
//         title: "Visit Us",
//         detail: "123 Learning Avenue, Lagos, Nigeria",
//     },
// ];

const Contact = () => {
    return (
        <div
            className="flex flex-col justify-center items-center mx-auto my-10 md:my-40 px-5 md:px-20"
            id="contact-page"
        >
            {/* Header */}
            <h1 className="border border-gray-500 rounded-2xl font-bold text-center w-fit px-3 py-1 bg-[#F1F7FE] text-[#1E40AF] mb-10">
                Contact Us
            </h1>

            <h2 className="text-5xl text-center font-bold text-[#0E2553]">
                Get In Touch With Us
            </h2>
            <p className="text-center w-full md:w-[60%] py-5 text-[#555]">
                Have questions or need assistance? We’re here to help you connect,
                collaborate, and grow with our School Management platform. Reach out
                through any of the channels below or send us a message directly.
            </p>

            {/* Contact Info Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
                {contactInfo.map((info) => (
                    <div
                        key={info.id}
                        className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <div className="mb-5 bg-[#F1F7FE] p-4 rounded-full">{info.icon}</div>
                        <h3 className="text-lg font-semibold text-[#0E2553] mb-2">
                            {info.title}
                        </h3>
                        <p className="text-[#747C86] text-sm">{info.detail}</p>
                    </div>
                ))}
            </div> */}

            {/* Contact Form */}
            <div className="md:mt-20 w-full max-w-3xl bg-white rounded-2xl shadow-md p-10">
                <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] resize-none"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#1E40AF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#17348A] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
