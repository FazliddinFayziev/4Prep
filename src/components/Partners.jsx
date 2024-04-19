import React, { useEffect, useState } from 'react'
import { useTrail, a } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { languageChange } from '../context/functions';

const data_1 = [
	{id: 1, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178735/noq2reybahfg5jifkims.png"},
	{id: 2, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178734/qwy7c7vx6i8azjcmtbye.png"},
	{id: 3, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178734/i8czhnpjhjhz4dzqevnp.png"},
	{id: 4, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178734/gzl0vgbkjyxu4n1uttaz.png"},
	{id: 5, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178734/bthlvnlunb81x9gej7wg.png"},
	{id: 6, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178734/y14w2ig2iwqegvxszn7c.png"},
]

const data_2 = [
	{id: 1, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/tyavfovoxhylswpg3dfi.png"},
	{id: 2, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/hf649l3fkjxwkmogr5a5.png"},
	{id: 3, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/on5bwnp7l7jammr26jgj.png"},
	{id: 4, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/awjowdadwblyjpwcsjbt.png"},
	{id: 5, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/uobb2gnprhrf9jo2udwp.png"},
	{id: 6, img: "https://res.cloudinary.com/dqhljaplg/image/upload/v1710178732/gad67itukoxkh3clp6ix.png"},
]

const Partners = () => {
	const {language} = useGlobalContext();

  const [scrollY, setScrollY] = useState(0);
  const items = [languageChange(language).family_title_one, languageChange(language).family_title_two];

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
    <div className='family_section h-full'>
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
		
			<div className='flex justify-center my-4'>
				<Link to={'https://four-prep-gallery.web.app/'}>
					<button className="hero_button border px-20 py-5 rounded-full font-bold">
        				{languageChange(language).family_button}
        			</button>
				</Link>
        	</div>

    </div>
  )
}

export default Partners
