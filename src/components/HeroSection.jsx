// import React from 'react'
// import HeroImage from "../assets/bg-image.jpg"

// const HeroSection = () => {
//   return (
//       <div className='bg-[#0E2553] h-screen w-full flex justify-between flex-col lg:flex-row gap-5 items-center px-5 md:px-20' id='home-page'>
//         <section className='flex flex-col gap-5 w-[60%]'>
//               <h1 className='text-white text-2xl lg:text-7xl font-bold'>Smarter <span className='text-[#3C83F6]'>Schools</span>. Brighter Futures.</h1>
//               <p className='text-white text-lg'> Transform how schools operate — where intelligence meets innovation. Our AI-driven platform simplifies administration, empowers teachers, and enhances learning outcomes effortlessly.</p>
//               <div className='flex gap-5 mt-5 '>
//                   <button className='bg-[#3C83F6] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'>Get Started</button>
//                   <button className='bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0E2553] transition'>Learn More</button>
//               </div>
//         </section>
//           <img src={HeroImage} alt="Herosection-Image" className='w-full  max-w-[500px] h-[50%] rounded-3xl' />
//     </div>
//   )
// }

// export default HeroSection

import React from 'react'
import HeroImage from "../assets/bg-image.jpg"

const HeroSection = () => {
  return (
    <div
      className="bg-[#0E2553] min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 gap-10 py-10"
      id="home-page"
    >
      {/* Text Section */}
      <section className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-3/5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl  font-bold ">
          Smarter <span className="text-[#3C83F6]">Schools</span>. Brighter Futures.
        </h1>

        <p className="text-white text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Transform how schools operate — where intelligence meets innovation. Our AI-driven platform simplifies administration, empowers teachers, and enhances learning outcomes effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <button className="bg-[#3C83F6] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0E2553] transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center">
        <img
          src={HeroImage}
          alt="Hero Section"
          className="w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[600px] h-auto rounded-3xl object-cover"
        />
      </div>
    </div>
  )
}

export default HeroSection
