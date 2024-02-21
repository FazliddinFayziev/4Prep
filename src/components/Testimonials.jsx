import { useTrail, a } from '@react-spring/web';
import { Parallax, useParallax } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react'

const Testimonials = () => {

  const [scrollY, setScrollY] = useState(0);
  const items = ['Testimonials'];

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
            <h1 className="text-outline text-4xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </h1>
          </Parallax>
        ))}
      </div>

        <div className='flex justify-center items-center overflow-hidden'>
          <Parallax rotate={[-90, 180]}>
              <div className="mockup-phone mt-12 mx-8">
                <div className="camera"></div> 
                <div className="display">
                  <div className="artboard artboard-demo phone-1">Hi.</div>
                </div>
              </div>
          </Parallax>
        </div>

    </div>
  )
}

export default Testimonials
