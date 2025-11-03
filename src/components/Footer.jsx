import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from "react-scroll";

const Footer = () => {
  return (
      <div className='bg-[#0A101D] flex flex-col  items-center mx-auto h-auto px-7 lg:h-[400px] lg:px-15'>
            <div className='grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8 w-full  text-white'>
                <div className='flex flex-col gap-5 py-10'>
                    <h1 className='text-gray-300'>MY LOGO</h1>
                    <p className='text-sm text-gray-500 '>
                      Edves is revolutionizing learning by integrating AI-driven teaching, automated school administration, and data intelligence into one unified platform.
                    </p>
                    <div className='flex gap-3 items-center'>
                        <span className='bg-gray-800 p-3 rounded-xl hover:bg-gray-500 hover:text-white cursor-pointer transition-colors'>
                          <FaFacebookF />
                        </span>
                        <span className='bg-gray-800 p-3 rounded-xl hover:bg-gray-500 hover:text-white cursor-pointer transition-colors'>
                          <FaTwitter />
                        </span>
                        <span className='bg-gray-800 p-3 rounded-xl hover:bg-gray-500 hover:text-white cursor-pointer transition-colors'>
                          <FaLinkedinIn />
                        </span>
                    </div>
                </div>
              <div className='flex flex-col gap-5 py-10'>
                    <h2 className='font-bold mb-2 text-gray-300'>Company</h2>
                    <ul className='list-none flex flex-col gap-3 text-gray-500'>
                        <li>
                            <Link to="home-page" smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Home</Link>
                        </li>
                        <li>
                            <Link to="about-page" smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>About</Link>
                        </li>
                        <li>
                            <Link to="services-page" smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Services</Link>
                        </li>
                        <li>
                            <Link to="states-page" smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>States</Link>
                        </li>
                        <li>
                            <Link to="contact-page" smooth={true} duration={500} className='hover:text-gray-300 cursor-pointer'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5 py-10'>
                    <h2 className='font-bold mb-2 text-gray-300'>Legal</h2>
                    <ul className='list-none flex flex-col gap-3 text-gray-500'>
                        <li className='hover:text-gray-300 cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-gray-300 cursor-pointer'>Terms of Service</li>
                    </ul>
                </div>
            </div>
          <hr className='w-full border-t border-gray-600 opacity-40 my-4'/>
          <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} SchoolManagement. All rights reserved.
          </p>
    </div>
  )
}

export default Footer