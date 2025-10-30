import React from 'react'
import HeroImage from "../assets/bg-image.jpg"

const HeroSection = () => {
  return (
      <div className='bg-[#0E2553] h-screen w-full flex justify-between gap-5 items-center px-20' id='home-page'>
        <section className='flex flex-col gap-5 w-[60%]'>
              <h1 className='text-white text-7xl font-bold'>Smarter <span className='text-[#3C83F6]'>Schools</span>. Brighter Futures.</h1>
              <p className='text-white text-lg'> Transform how schools operate — where intelligence meets innovation. Our AI-driven platform simplifies administration, empowers teachers, and enhances learning outcomes effortlessly.</p>
              <div className='flex gap-5 mt-5 '>
                  <button className='bg-[#3C83F6] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'>Get Started</button>
                  <button className='bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0E2553] transition'>Learn More</button>
              </div>
        </section>
          <img src={HeroImage} alt="Herosection-Image" className='w-full  max-w-[500px] h-[50%] rounded-3xl' />
    </div>
  )
}

export default HeroSection