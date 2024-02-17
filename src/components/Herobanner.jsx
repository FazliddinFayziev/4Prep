import React from 'react'
import art from '../img/art.gif';
import usa from '../img/usa-map.png';
import { useTrail, a } from '@react-spring/web';

const Herobanner = () => {

  const items = ['Dream Big', 'Start Now!'];

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 100 },
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="hero min-h-screen">
        <div className="hero-content w-[100%] flex lg:mt-[80px]">
          {/* LEFT SIDE TEXT */}
          <div className='relative z-20'>
            {trail.map((style, index) => (
              <a.h1 key={index} className="text-outline text-6xl font-bold lg:text-8xl" style={style}>
                {items[index]}
              </a.h1>
            ))}
            <p className="py-6 text-2xl font-semibold">Discover New Opportunities and Ideas with Our Global Student Community!</p>
            <button class="border px-10 py-4 rounded-full text-white font-bold bg-transparent hover:bg-white hover:text-black transition duration-500 ease-in-out">
              Become a student
            </button>
          </div>
          <div className='w-[40%] hidden lg:block'></div>
          {/* images and Gifs */}
          <div className='absolute w-[100%] h-[100%] lg:w-[50%] right-0 z-1 opacity-[50%] top-0'>
            <img className='w-full h-full object-cover object-center' src={art} alt="art" />
          </div>
          <div className='absolute right-0 z-10 opacity-40 top-[20%] md:h-[70%] lg:top-[15%] w-full md:w-auto md:max-w-full lg:max-w-[80%] lg:min-h-[80%] max-h-[80%]'>
            <img className='w-full h-full object-cover object-center' src={usa} alt="usa-map" style={{ objectFit: 'cover' }} />
          </div>
        </div>
    </div>
  )
}

export default Herobanner
