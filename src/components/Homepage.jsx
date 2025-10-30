import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Countries from './Countries'
import Services from './Services'
import Contact from './Contact'

const Homepage = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Services/>
        <Countries/>
        <Contact/>
    </>
  )
}

export default Homepage