import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import States from './States'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Services/>
        <States/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Homepage