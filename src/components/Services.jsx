import React, { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import hat from "../img/hat.png";
import zoom from "../img/zoom.png";

const data = [
  {
    id: 0,
    img: hat,
    text: "Unlocking Opportunities: Your Comprehensive Guide to Scholarships, Grants, and Financial Aid"
  },
  {
    id: 1,
    img: zoom,
    text: "Navigate the Visa Maze: Your Visa & Immigration Resource Hub"
  }
]

const Services = () => {

  const [scrollY, setScrollY] = useState(0);
  const items = ['Our', 'Services'];

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
    <div className='w-full h-full my-10'>
      <div className="about-us flex justify-center mt-4">
        {trail.map((style, index) => (
          <Parallax key={index} className="pic" y={[50, -50]}>
            <a.h1 className="text-outline text-5xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </a.h1>
          </Parallax>
        ))}
      </div>
      <div className="services-section mt-[-150px]">
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {
            data.map((card) => {
              const { id, img, text } = card
              return (
                <Parallax key={id} className="pic" y={[50, -50]}>
                  <div className="card card-compact w-90 bg-tranparent shadow-xl mx-4">
                    <figure className='opacity-40'><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-center font-thin">{text}</h2>
                    </div>
                  </div>
                </Parallax>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
