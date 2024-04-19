import React, { useEffect, useState } from 'react'
import { useTrail } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import { useGlobalContext } from '../context/context';
import { languageChange } from '../context/functions';

const Faqs = () => {

  const { language } = useGlobalContext();

  const data = [
  {
    id: 1,
    question: languageChange(language).question_two,
    answer: languageChange(language).answer_two,
  },
  {
    id: 2,
    question: languageChange(language).question_three,
    answer: languageChange(language).answer_three,
  }
]

  const [scrollY, setScrollY] = useState(0);
  const items = [languageChange(language).faqs_title];

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
    <div className='h-full faq_section'>
      <div className="about-us flex justify-center mt-4">
        {trail.map((style, index) => (
          <Parallax key={index} className="pic" y={[50, -50]}>
            <h1 className="text-outline text-6xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </h1>
          </Parallax>
        ))}
      </div>

      <section className="faq container" aria-level="Frequently Asked Questions">
        <div className="faq__body">
          <details open className="faq__panel">
            <summary className="faq__label">{languageChange(language).question_one}</summary>
            <div className="faq__panel-body">
              <p className="faq__panel-answer font-thin">{languageChange(language).answer_one}</p>
            </div>
          </details>
          {data.map((value) => {
            const {id, question, answer} = value
            return (
              <details key={id} aria-expanded="false" className="faq__panel">
                <summary className="faq__label">{question}</summary>
                <div className="faq__panel-body">
                  <p className="faq__panel-answer font-thin">{answer}</p>
                </div>
              </details>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default Faqs
