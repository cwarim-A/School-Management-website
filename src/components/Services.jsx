// import React from 'react'
// import { AiOutlineBarChart } from 'react-icons/ai';
// import { FaCloud, FaUsers } from 'react-icons/fa';
// import { FiBookOpen, FiMessageCircle } from 'react-icons/fi';
// import { IoSettings } from 'react-icons/io5';


// const services = [
//     {
//         id: 1,
//         title: "Smart Attendance Tracking",
//         icon: <FaUsers className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Automate attendance management with real-time tracking for students and teachers. Gain instant visibility into daily participation and performance analytics.",
//     },
//     {
//         id: 2,
//         title: "AI-Powered Gradebook",
//         icon: <AiOutlineBarChart className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Simplify grading and report generation. Our system intelligently computes scores, analyzes progress, and helps educators provide targeted feedback.",
//     },
//     {
//         id: 3,
//         title: "Seamless Communication",
//         icon: <FiMessageCircle className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Bridge the gap between teachers, students, and parents with instant messaging, notifications, and class updates — all in one platform.",
//     },
//     {
//         id: 4,
//         title: "Cloud-Based Data Storage",
//         icon: <FaCloud className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Securely store student records, academic history, and administrative data in the cloud — accessible anytime, anywhere.",
//     },
//     {
//         id: 5,
//         title: "Curriculum & Lesson Management",
//         icon: <FiBookOpen className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Plan, organize, and deliver lessons efficiently. Empower teachers to design dynamic learning experiences aligned with educational goals.",
//     },
//     {
//         id: 6,
//         title: "Administrative Automation",
//         icon: <IoSettings className="w-8 h-8 text-[#1E40AF]" />,
//         description:
//             "Reduce manual workload by automating fee collection, payroll, and record updates — so staff can focus on improving school outcomes.",
//     },
// ];

// const Services = () => {
//     return (
//         <div className="flex flex-col justify-center items-center mx-auto my-40" id="services-page">
//             <h1 className="border border-gray-500 rounded-2xl font-bold text-center w-fit flex justify-center mx-auto px-3 py-1 bg-[#F1F7FE] text-[#1E40AF] mb-10">
//                 Our Services
//             </h1>

//             <h2 className="text-5xl text-center font-bold text-[#0E2553]">
//                 Simplifying School Management
//             </h2>

//             <p className="text-center w-[50%] py-5 text-[#555]">
//                 We offer intelligent, automated, and connected tools designed to help schools operate seamlessly — enhancing teaching, administration, and collaboration across every level.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full max-w-6xl">
//                 {services.map((item) => (
//                     <div
//                         key={item.id}
//                         className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center"
//                     >
//                         <div className="mb-5 bg-[#F1F7FE] p-4 rounded-full">{item.icon}</div>
//                         <h3 className="text-xl font-semibold text-[#0E2553] mb-3">{item.title}</h3>
//                         <p className="text-[#747C86] text-sm">{item.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;


import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaCloud, FaUsers } from "react-icons/fa";
import { FiBookOpen, FiMessageCircle } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";

const services = [
    {
        id: 1,
        title: "Smart Attendance Tracking",
        icon: <FaUsers className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Automate attendance management with real-time tracking for students and teachers. Gain instant visibility into daily participation and performance analytics.",
    },
    {
        id: 2,
        title: "AI-Powered Gradebook",
        icon: <AiOutlineBarChart className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Simplify grading and report generation. Our system intelligently computes scores, analyzes progress, and helps educators provide targeted feedback.",
    },
    {
        id: 3,
        title: "Seamless Communication",
        icon: <FiMessageCircle className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Bridge the gap between teachers, students, and parents with instant messaging, notifications, and class updates — all in one platform.",
    },
    {
        id: 4,
        title: "Cloud-Based Data Storage",
        icon: <FaCloud className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Securely store student records, academic history, and administrative data in the cloud — accessible anytime, anywhere.",
    },
    {
        id: 5,
        title: "Curriculum & Lesson Management",
        icon: <FiBookOpen className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Plan, organize, and deliver lessons efficiently. Empower teachers to design dynamic learning experiences aligned with educational goals.",
    },
    {
        id: 6,
        title: "Administrative Automation",
        icon: <IoSettings className="w-8 h-8 text-[#1E40AF]" />,
        description:
            "Reduce manual workload by automating fee collection, payroll, and record updates — so staff can focus on improving school outcomes.",
    },
];

const Services = () => {
    return (
        <div
            className="flex flex-col justify-center items-center mx-auto my-20 px-5 md:px-20"
            id="services-page"
        >
            <h1 className="border border-gray-500 rounded-2xl font-bold text-center w-fit flex justify-center mx-auto px-3 py-1 bg-[#F1F7FE] text-[#1E40AF] mb-8">
                Our Services
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-[#0E2553] leading-snug">
                Simplifying School Management
            </h2>

            <p className="text-center text-[#555] py-5 w-full sm:w-[80%] md:w-[65%] lg:w-[50%]">
                We offer intelligent, automated, and connected tools designed to help
                schools operate seamlessly — enhancing teaching, administration, and
                collaboration across every level.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 w-full max-w-7xl">
                {services.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-center items-center bg-white rounded-xl p-6 sm:p-6 md:p-7 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center"
                    >
                        <div className="mb-5 bg-[#F1F7FE] p-3 sm:p-4 rounded-full">
                            {item.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0E2553] mb-3">
                            {item.title}
                        </h3>
                        <p className="text-[#747C86] text-sm sm:text-base">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Services;
