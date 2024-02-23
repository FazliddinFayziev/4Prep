import { useTrail } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import person_1 from "../img/person_1.webp";
import person_2 from "../img/person_2.jpg";
import person_3 from "../img/person_3.jpg";

const data = [
  {
    id: 0,
    name: "Fazliddin",
    feedback: "Thanks to 4prep, I felt fully prepared for my visa interviews and scholarship applications. Highly recommend!"
  },
  {
    id: 1,
    name: "Fazliddin",
    feedback: "Great help from 4prep with visa interviews and scholarships. Highly satisfied!"
  },
  {
    id: 2,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 3,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 4,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 5,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 6,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 7,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 8,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 9,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
  {
    id: 10,
    name: "Fazliddin",
    feedback: "Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!"
  },
]

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

      <div className='testimonials_section flex justify-center items-center overflow-hidden h-[120vh]'>
        <Parallax rotate={[-60, 60]}>
            <div className="mockup-phone mt-12 mx-8">
              <div className="camera"></div> 
              <div className="display">
                <div className="phone_bg artboard artboard-demo phone-1 font-thin">
                  {/* MESSAGE ONE */}
                  <div className='flex justify-start w-full'>
                    <div class="chat chat-start mx-4 flex justify-start">
                      <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src={person_1} />
                        </div>
                      </div>
                      <div class="chat-bubble">Thanks to 4prep, I felt fully prepared for my visa interviews and scholarship applications. Highly recommend!</div>
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
                      <div className="chat-bubble">Great help from 4prep with visa interviews and scholarships. Highly satisfied!</div>
                    </div>
                  </div>
                  {/* MESSAGE THREE */}
                  <div className='flex justify-start w-full'>
                    <div class="chat chat-start mx-4 flex justify-start">
                      <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src={person_3} />
                        </div>
                      </div>
                      <div class="chat-bubble">Fantastic support from 4prep for visa interviews and scholarship guidance. Highly recommended!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Parallax>
      </div>

      {/* SLIDER_1 */}
      <div class="slider">
	      <div class="slide-track">
          {data.map((slide) => {
            const {id, name, feedback} = slide
            return (
              <div key={id} class="slide">
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
      <div class="slider_2">
	      <div class="slide-track_2">
          {data.map((slide) => {
            const {id, name, feedback} = slide
            return (
              <div key={id} class="slide_2">
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
