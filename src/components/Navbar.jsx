// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };





//   return (

//     <nav className='flex items-center justify-between px-20 py-10 h-[30px] shadow-md sticky top-0 bg-white z-50'>
//       <h1>MY LOGO</h1>
//       <ul className='flex list-none gap-7  text-[16px] '>
//         <li onClick={() => scrollToSection('home-page')} className='cursor-pointer hover:text-[#3C83F6]'>Home</li>
//         <li onClick={() => scrollToSection('about-page')} className='cursor-pointer hover:text-[#3C83F6]'>About</li>
//         <li onClick={() => scrollToSection('services-page')} className='cursor-pointer hover:text-[#3C83F6]'>Services</li>
//         <li onClick={() => scrollToSection('countries-page')} className='cursor-pointer hover:text-[#3C83F6]'>Countries</li>
//         <li onClick={() => scrollToSection('contact-page')} className='cursor-pointer hover:text-[#3C83F6]'>Contact</li>
//       </ul>
//       <button className='bg-[#3C83F6] text-white px-5 py-2 rounded-md font-bold cursor-pointer'>Sign Up</button>
//     </nav>

//   )
// }

// export default Navbar



import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-5 lg:px-20 py-10 h-[30px] shadow-md sticky top-0 bg-white z-50 ">
      <h1>MY LOGO</h1>
      <ul className="hidden  md:flex list-none gap-7 text-[16px]">
        <li>
          <Link
            to="home-page"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-page"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services-page"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="states-page"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            States
          </Link>
        </li>
        <li>
          <Link
            to="contact-page"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="hidden md:block bg-[#3C83F6] text-white px-5 py-2 rounded-md font-bold cursor-pointer">
        Get started
      </button>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <LiaTimesSolid size={28} /> : <RiMenu3Line size={28} />}
        </button>
      </div>
        {
          isMenuOpen && (
            <>
          <ul className="flex flex-col items-center justify-center gap-10 text-lg fixed top-20 left-0 w-full h-screen bg-white z-40 text-center">
              <li>
                <Link
                  to="home-page"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about-page"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services-page"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="states-page"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  States
                </Link>
              </li>
              <li>
                <Link
                  to="contact-page"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-md mb-10 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </>
          )
        }
    </nav>
  );
};

export default Navbar;
