import AOS from 'aos';
import 'aos/dist/aos.css';
import art from '../img/line.svg';
import usa from '../img/usa-map.png';
import React, { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { languageChange } from '../context/functions';
import { useGlobalContext } from '../context/context';

const Herobanner = () => {
  const {language} = useGlobalContext();

  const items = [languageChange(language).first_part, languageChange(language).second_part];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: 1,
    x: 0,
    height: 80 + scrollY * 0.1,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-[100%] flex lg:mt-[80px]">
        {/* LEFT SIDE TEXT */}
        <div className='relative z-20'>
          {trail.map((style, index) => (
            <Parallax key={index} className="pic" y={[40, -40]}>
              <h1 className={`text-outline text-6xl font-bold lg:text-6xl`} style={style}>
                {items[index]}
              </h1>
            </Parallax>
          ))}
          <Parallax className="pic" y={[50, -50]}>
            <p className="py-6 mt-8 text-2xl font-semibold">{languageChange(language).title}</p>
          </Parallax>
          <Link to={'/contact'}>
            <button className="hero_button border px-10 py-4 rounded-full font-bold">
              {languageChange(language).become_student}
            </button>
          </Link>
        </div>
        <div className='w-[45%] hidden lg:block'></div>
        {/* images and Gifs */}
        <div className='absolute w-full h-full right-0 z-10 top-0'>
          <img data-aos="fade-up" data-aos-duration="3000" className='w-full h-full object-cover object-center' src={art} alt="art" />
        </div>
        <div className='absolute right-0 z-1 opacity-15 top-[20%] md:h-[70%] lg:top-[15%] w-full md:w-auto md:max-w-full lg:max-w-[80%] lg:min-h-[80%] max-h-[80%]'>
          <img data-aos="zoom-in" data-aos-duration="3000" className='w-full h-full object-cover object-center' src={usa} alt="usa-map" style={{ objectFit: 'cover' }} />
        </div>
        <div class="box">
		      <span></span>
		      <span></span>
	      </div>
      </div>
    </div>
  );
}

export default Herobanner;
