import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
import { languageChange } from '../context/functions';

const About = () => {
  const {language} = useGlobalContext()

  const [scrollY, setScrollY] = useState(0);
  const items = [languageChange(language).about_one, languageChange(language).about_two];

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: 1,
    x: 0,
    height: 80 + scrollY * 0.1,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-full about_section'>
      <div className="about-us flex justify-center mt-4">
        {trail.map((style, index) => (
          <Parallax key={index} className="pic">
            <a className="text-outline text-6xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </a>
          </Parallax>
        ))}
      </div>
      <div className='mx-6 mt-10'>
        <div className="collapse bg-transparent text-2xl lg:text-4xl focus:bg-secondary focus:text-secondary-content">
          <div className="collapse-title">
            <Parallax className="pic">
              <span className='font-bold text-justify'>{languageChange(language).about_title}</span>
            </Parallax>
            <Parallax className="pic">
              <p className='font-thin text-justify mt-4'>
                {languageChange(language).about_text}
              </p>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
