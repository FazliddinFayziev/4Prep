// Home Component
import React, { useRef } from 'react'
import { useGlobalContext } from '../context/context'
import { Navbar, Herobanner, Measure, About, Service, Testimonials, Faqs, Footer, Partners } from '../components';

const Home = () => {
  const { home } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Herobanner />
      <Measure />
      <About />
      <Service />
      <Partners />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  )
}

export default Home
