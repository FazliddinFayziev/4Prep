import React from 'react'
import { useGlobalContext } from '../context/context'
import { Navbar, Herobanner, Measure, About, Service, Team, Testimonials, Faqs, Footer } from '../components';

const Home = () => {

    const { home } = useGlobalContext();

    return (
        <div className=''>
            <Navbar />
            <Herobanner />
            <Measure />
            <About />
            <Service />
            <Team />
            <Testimonials />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Home