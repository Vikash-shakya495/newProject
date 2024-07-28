import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'

function LandingPage() {
  return (
    <div className=''>
        <Navbar />
        <Hero />
        <OurServices />
        <Testimonials />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default LandingPage