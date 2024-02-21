import React, { useEffect, useState } from 'react'
import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import img_1 from "../img/img_1.webp";
import img_2 from "../img/img_2.jpg";
import img_3 from "../img/img_3.jpg";
import img_4 from "../img/img_4.jpg";
import img_5 from "../img/img_5.jpg";
import img_6 from "../img/img_6.jpg";
import img_7 from "../img/img_7.jpg";
import img_9 from "../img/img_9.jpg";
import img_10 from "../img/img_10.jpeg";
import img_11 from "../img/img_11.jpg";
import img_12 from "../img/img_12.jpg";

const data_1 = [
	{id: 1, img: img_1},
	{id: 2, img: img_2},
	{id: 3, img: img_3},
	{id: 4, img: img_4},
	{id: 5, img: img_5},
	{id: 6, img: img_6},
]

const data_2 = [
	{id: 1, img: img_1},
	{id: 2, img: img_7},
	{id: 3, img: img_9},
	{id: 4, img: img_10},
	{id: 5, img: img_11},
	{id: 6, img: img_12},
]

const Partners = () => {

  const [scrollY, setScrollY] = useState(0);
  const items = ['Dream', 'Selection'];

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
      	<div className="about-us flex justify-center mt-8">
      	  {trail.map((style, index) => (
      	    <Parallax key={index} className="pic" y={[50, -50]}>
      	      <h1 className="text-outline text-4xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
      	        {items[index]}
      	        <div className="absolute w-full h-[120px] mt-[-110px] shadow-lg">
      	          <div className="half h-full"></div>
      	        </div>
      	      </h1>
      	    </Parallax>
      	  ))}
      	</div>

		<div className='overflow-x-hidden mt-12 opacity-45'>
        	<div className='parallax-container my-4'>
        	    <Parallax
        	        easing='easeOutQuad'
        	        translateX={[50, 0]}
        	        className='grid__parallax grid grid-cols-6 gap-[200px]'
        	    >
					{data_1.map((data) => {
						const {id, img} = data
						return (
							<div key={id} className='lg:w-[200px] lg:h-[200px] w-[150px] h-[150px]' style={{ margin: '0 20px' }}>
								<img className='w-full h-full object-cover object-center' src={img} alt='university-image' />
							</div>
						)
					})}
        	    </Parallax>
        	</div>
        
        	<div className='parallax-container my-8'>
        	    <Parallax
        	        easing='easeOutQuad'
        	        translateX={[-50, 0]}
        	        className='grid__parallax grid grid-cols-6 gap-[200px]'
        	    >
					{data_2.map((data) => {
						const {id, img} = data
						return (
							<div key={id} className='lg:w-[200px] lg:h-[200px] w-[150px] h-[150px]' style={{ margin: '0 20px' }}>
								<img className='w-full h-full object-cover object-center' src={img} alt='university-image' />
							</div>
						)
					})}
        	    </Parallax>
        	</div>
		</div>

    </div>
  )
}

export default Partners
