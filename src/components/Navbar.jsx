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



import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-10 h-[30px] shadow-md sticky top-0 bg-white z-50">
      <h1>MY LOGO</h1>
      <ul className="flex list-none gap-7 text-[16px]">
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
            to="countries-page"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            Countries
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
      <button className="bg-[#3C83F6] text-white px-5 py-2 rounded-md font-bold cursor-pointer">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
