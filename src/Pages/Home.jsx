// Home Component
import React, { useEffect, useState } from 'react';
import Loading from "../components/Loading";
import { useGlobalContext } from '../context/context';
import { Navbar, Herobanner, Measure, About, Service, Testimonials, Faqs, Footer, Partners, Univer, News } from '../components';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { home } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Herobanner />
      <Measure />
      <About />
      {/* <Univer /> */}
      <Service />
      <Partners />
      <Testimonials />
      <Faqs />
      <News />
      <Footer />
    </>
  );
};

export default Home;
