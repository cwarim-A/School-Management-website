// import React from 'react'
// import { FaChartBar, FaUsers } from 'react-icons/fa'
// import { IoSettings } from 'react-icons/io5'






// const cardContent = [
//     {
//         id:1,
//         title:"Streamline daily operations",
//         icon: <IoSettings />,
//         description:"From attendance to grading and communication. Automate repetitive tasks and free up time for what truly matters — student growth and meaningful learning."
//     },
//     {
//         id:2,
//         title:"Enhance collaboration",
//         icon: <FaUsers />,
//         description:"Foster seamless communication among teachers, students, and parents. Share updates, assignments, and feedback in real-time to create a connected learning community."
//     },
//     {
//         id:3,
//         title:"Data-Driven Insights",
//         icon: <FaChartBar />,
//         description:"Leverage analytics to track student performance, identify trends, and make informed decisions. Empower educators with actionable insights to tailor instruction and improve outcomes."
//     }
// ]

// const About = () => {
//   return (
//       <div className='flex flex-col justify-center items-center mx-auto my-20 h-screen' id='about-page'>
//           <h1 className='border border-gray-500 rounded-2xl font-bold text-center w-fit flex justify-center mx-auto px-3 py-1  bg-[#F1F7FE] text-[#1E40AF] mb-10 '>About Us</h1>
//           <h1 className='text-5xl text-center font-bold text-[#0E2553]'>One Platform. Global Impact.</h1>
//           <p className='text-center w-[50%] py-5 '>Streamline daily operations, from attendance to grading and communication. Automate repetitive tasks and free up time for what truly matters — student growth and meaningful learning.</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
//               {cardContent.map((item) => (
//                   <div
//                       key={item.id}
//                       className="flex flex-col justify-center items-center bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center "
//                   >
//                       <span className='text-3xl bg-[#1E40AF] text-white mb-5 border border-gray-300 rounded-2xl p-4 '>
//                         {item.icon}
//                       </span>
//                       <h2 className="text-lg font-semibold text-[#565E68] mb-2">
//                           {item.title}
//                       </h2>
//                       <p className="text-[#747C86] text-sm">{item.description}</p>
//                   </div>
//               ))}
//           </div>

//     </div>
//   )
// }

// export default About


import React from 'react'
import { FaChartBar, FaUsers } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

const cardContent = [
    {
        id: 1,
        title: 'Streamline daily operations',
        icon: <IoSettings />,
        description:
            'From attendance to grading and communication — automate repetitive tasks and free up time for what truly matters: student growth and meaningful learning.',
    },
    {
        id: 2,
        title: 'Enhance collaboration',
        icon: <FaUsers />,
        description:
            'Foster seamless communication among teachers, students, and parents. Share updates, assignments, and feedback in real-time to create a connected learning community.',
    },
    {
        id: 3,
        title: 'Data-Driven Insights',
        icon: <FaChartBar />,
        description:
            'Leverage analytics to track student performance, identify trends, and make informed decisions. Empower educators with insights to improve outcomes.',
    },
]

const About = () => {
    return (
        <div
            className="flex flex-col justify-center items-center mx-auto py-20 px-6 sm:px-10 lg:px-20 bg-[#F9FAFB]"
            id="about-page"
        >
            {/* Section Header */}
            <h1 className="border border-gray-400 rounded-2xl font-semibold text-center w-fit px-4 py-1 bg-[#F1F7FE] text-[#1E40AF] mb-6 text-sm sm:text-base">
                About Us
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-[#0E2553] leading-snug max-w-3xl">
                Transforming Schools. Empowering Futures.

            </h2>

            <p className="text-center text-[#555] text-base sm:text-lg mt-5 max-w-2xl">
                Simplify school management with intelligent automation. From attendance tracking to performance analytics, everything connects effortlessly.
                Spend less time on admin and more time shaping the next generation of thinkers and leaders.
            </p>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 w-full max-w-6xl">
                {cardContent.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-center items-center bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-center"
                    >
                        <span className="text-3xl sm:text-4xl bg-[#1E40AF] text-white mb-5 rounded-2xl p-4 flex justify-center items-center">
                            {item.icon}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0E2553] mb-2">
                            {item.title}
                        </h3>
                        <p className="text-[#747C86] text-sm sm:text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About
