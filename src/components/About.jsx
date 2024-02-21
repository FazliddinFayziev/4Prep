import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const items = ['About', 'Us'];

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
    <div className='h-full'>
      <div className="about-us flex justify-center mt-4">
        {trail.map((style, index) => (
          <Parallax key={index} className="pic" y={[50, -50]}>
            <a.h1 className="text-outline text-6xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </a.h1>
          </Parallax>
        ))}
      </div>
      <div className='mx-6 mt-[-70px]'>
        <div className="collapse bg-transparent text-2xl lg:text-4xl focus:bg-secondary focus:text-secondary-content">
          <div className="collapse-title">
            <Parallax className="pic" y={[50, -50]}>
              <span className='font-bold text-justify'>Welcome to 4prep, your trusted partner in unlocking the doors to prestigious American universities.</span>
            </Parallax>
            <Parallax className="pic" y={[50, -50]}>
              <p className='font-thin text-justify mt-4'>
                At 4prep, we are dedicated to empowering students worldwide to pursue their dreams of studying in the United States. With our comprehensive suite of services, we guide aspiring scholars through every step of the journey, from university admissions to securing scholarships and navigating the complex visa application process.
              </p>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
