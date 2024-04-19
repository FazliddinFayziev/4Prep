import { useTrail } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import person_1 from "../img/person_1.webp";
import person_2 from "../img/person_2.jpg";
import person_3 from "../img/person_3.jpg";
import { useGlobalContext } from '../context/context';
import { languageChange } from '../context/functions';

const data = [
  {
    id: 0,
    name: "Rahmatulloh",
    feedback: "4prep made my dreams of studying in the US a reality. Their guidance and resources gave me the confidence and support I needed to navigate the competitive admissions process successfully."
  },
  {
    id: 1,
    name: "Sardor",
    feedback: "With 4prep's guidance, I not only gained admission to top US universities but also secured scholarships that made my education more affordable. Their dedication to student empowerment sets them apart as a trusted partner in achieving academic goals."
  },
  {
    id: 2,
    name: "Alisa",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 3,
    name: "Max",
    feedback: "4prep's team went above and beyond to assist me at every step of my application journey. Their personalized approach and vast knowledge of the US education system truly made a difference in my university acceptance."
  },
  {
    id: 4,
    name: "John",
    feedback: "I highly recommend 4prep to any student aspiring to study in the US. Their professional guidance and unwavering support made the application process smoother and less stressful, ultimately leading to my acceptance at a prestigious American university."
  },
  {
    id: 5,
    name: "Javohir",
    feedback: "Thank you, 4prep, for guiding me through the intricate process of applying to US universities. Your expertise and dedication were instrumental in helping me fulfill my dream of studying abroad."
  },
  {
    id: 6,
    name: "Necholas",
    feedback: "4prep provided me with the resources and expertise needed to turn my aspirations into reality. Their team's commitment to excellence and individualized support made my journey to studying in the US a seamless and rewarding experience."
  },
  {
    id: 7,
    name: "Stiff",
    feedback: "I am immensely grateful to 4prep for their invaluable assistance throughout my application process. Their team's professionalism, knowledge, and unwavering support were instrumental in helping me secure admission to my top-choice university in the United States."
  },
  {
    id: 8,
    name: "Husan",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 9,
    name: "Nasimjon",
    feedback: "Thanks to 4prep, I received personalized guidance and support throughout my entire application process. Their expertise and attention to detail helped me secure admission to my dream university!"
  },
  {
    id: 10,
    name: "Mavlonxon",
    feedback: "I'm incredibly grateful for the invaluable assistance provided by 4prep. Their team's dedication and knowledge played a crucial role in helping me navigate the complex journey of studying in the US."
  },
]

const Testimonials = () => {
  const {language} = useGlobalContext();

  const [scrollY, setScrollY] = useState(0);
  const items = [languageChange(language).testimonials_title];

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

      <div className='testimonials_section flex justify-center items-center overflow-hidden h-[120vh]'>
        <Parallax rotate={[-60, 60]}>
            <div className="mockup-phone mt-12 mx-8">
              <div className="camera"></div> 
              <div className="display">
                <div className="phone_bg artboard artboard-demo phone-1 font-thin">
                  {/* MESSAGE ONE */}
                  <div className='flex justify-start w-full'>
                    <div className="chat chat-start mx-4 flex justify-start">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src={person_1} />
                        </div>
                      </div>
                      <div className="chat-bubble">{languageChange(language).test_one}</div>
                    </div>
                  </div>
                  {/* MESSAGE TWO */}
                  <div className='flex justify-end w-full'>
                    <div className="chat chat-end">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src={person_2} />
                        </div>
                      </div>
                      <div className="chat-bubble">{languageChange(language).test_two}</div>
                    </div>
                  </div>
                  {/* MESSAGE THREE */}
                  <div className='flex justify-start w-full'>
                    <div className="chat chat-start mx-4 flex justify-start">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src={person_3} />
                        </div>
                      </div>
                      <div className="chat-bubble">{languageChange(language).test_three}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Parallax>
      </div>

      {/* SLIDER_1 */}
      <div className="slider">
	      <div className="slide-track">
          {data.map((slide) => {
            const {id, name, feedback} = slide
            return (
              <div key={id} className="slide">
                <div>
	      		      <p className='font-thin'>{feedback}</p>
                </div>
                <div className='mt-4 text-[#37DCBB]'>
                  <p className='flex items-center gap-4'>
                    <FaUserAlt />
                    {name}
                  </p>
                </div>
	      	    </div>
            )
          })}
	      </div>
      </div>

      {/* SLIDER_2 */}
      <div className="slider_2">
	      <div className="slide-track_2">
          {data.map((slide) => {
            const {id, name, feedback} = slide
            return (
              <div key={id} className="slide_2">
                <div>
	      		      <p className='font-thin'>{feedback}</p>
                </div>
                <div className='mt-4 text-[#37DCBB]'>
                  <p className='flex items-center gap-4'>
                    <FaUserAlt />
                    {name}
                  </p>
                </div>
	      	    </div>
            )
          })}
	      </div>
      </div>

    </div>
  )
}

export default Testimonials
