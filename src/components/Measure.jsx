import React from 'react'
import img from '../img/art-2.gif'
import { ParallaxBanner } from 'react-scroll-parallax';

const Measure = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '', speed: -20 },
        {
          speed: -15,
          children: (
            <div className='flex justify-center items-center'>
              <div className='company_name'>
                <h1>
                  <span>4PREP</span>
                  <span>4PREP</span>
                  <span>4PREP</span>
                </h1>
              </div>
            </div>
          ),
        },
      ]}
      className="aspect-[2/1] lg:aspect-[3/1]"
    />
  );
}

export default Measure
