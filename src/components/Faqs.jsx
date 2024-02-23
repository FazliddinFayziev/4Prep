import React, { useEffect, useState } from 'react'
import { useTrail } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';

const data = [
  {
    id: 0,
    question: "How can 4prep help me with my university admissions process?",
    answer: "4prep provides comprehensive assistance throughout the university admissions process. Our experienced team guides you through selecting suitable universities, preparing application materials, and ensuring all requirements are met for a successful application. We offer personalized support to maximize your chances of admission to top universities in the United States."
  },
  {
    id: 1,
    question: "Can 4prep assist me in finding scholarships to fund my education in the United States?",
    answer: "Yes, 4prep is dedicated to helping students secure scholarships to fund their education in the United States. Our team assists you in identifying scholarship opportunities, crafting compelling scholarship applications, and meeting deadlines. We strive to alleviate the financial burden of studying abroad by connecting students with various scholarship options tailored to their academic achievements and financial needs."
  },
  {
    id: 2,
    question: "Does 4prep provide support for the visa application process?",
    answer: "Absolutely! 4prep understands the importance of a smooth visa application process for international students. Our experts offer guidance and resources to prepare you for the visa interview, including mock interviews and tips for success. We ensure that you are equipped with the necessary documents and information to navigate the visa application process with confidence, helping you realize your dream of studying in the United States."
  }
]

const Faqs = () => {

  const [scrollY, setScrollY] = useState(0);
  const items = ['FAQs'];

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
            <h1 className="text-outline text-6xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
              {items[index]}
              <div className="absolute w-full h-[120px] mt-[-110px]">
                <div className="half h-full"></div>
              </div>
            </h1>
          </Parallax>
        ))}
      </div>

      <section class="faq container" aria-level="Frequently Asked Questions">
        <div class="faq__body">
          {data.map((value) => {
            const {id, question, answer} = value
            return (
              <details key={id} aria-expanded="false" class="faq__panel">
                <summary class="faq__label">{question}</summary>
                <div class="faq__panel-body">
                  <p class="faq__panel-answer font-thin">{answer}</p>
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
