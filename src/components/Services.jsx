import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import hat from "../img/hat.png";
import zoom from "../img/zoom.jpg";
import { useGlobalContext } from '../context/context';
import { languageChange } from '../context/functions';

const Services = () => {

  const {language} = useGlobalContext();

  const data = [
    {
      id: 0,
      img: hat,
      text: languageChange(language).service_study
    },
    {
      id: 1,
      img: zoom,
      text: languageChange(language).service_visa
    }
  ]

  const [scrollY, setScrollY] = useState(0);
  const items = [languageChange(language).service_title_one, languageChange(language).service_title_two];

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: 1,
    x: 0,
    height: 80 + scrollY * 0.1,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='service_section w-full h-full my-10'>
      <div data-aos="fade-up" data-aos-duration="3000" className="about-us flex justify-center mt-4">
        {trail.map((style, index) => (
          <Parallax key={index}>
            <h1 className="text-outline text-5xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </h1>
          </Parallax>
        ))}
      </div>
      <div className="services-section">
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {
            data.map((card) => {
              const { id, img, text } = card
              return (
                <div className='service_card' key={id}>
                  <div data-aos="fade-up" data-aos-duration="3000" className="card card-compact w-90 bg-tranparent shadow-xl mx-4">
                    <figure className='opacity-40'><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-center font-thin p-10">{text}</h2>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
