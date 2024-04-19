  import React, { useEffect, useState } from 'react'
  import { useGlobalContext } from '../context/context';
  import { useTrail } from 'react-spring';
  import { Parallax } from 'react-scroll-parallax';
import { languageChange } from '../context/functions';

  const News = () => {
      const {language} = useGlobalContext()

      const [scrollY, setScrollY] = useState(0);
      const items = [languageChange(language).blog_one, languageChange(language).blog_two];

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
        <div className='main my-8'>
          <div className="about-us flex justify-center mt-4">
            {trail.map((style, index) => (
              <Parallax key={index} className="pic">
                <a className="text-outline text-6xl mt-12 lg:text-8xl lg:mt-1 mb-4" style={style}>
                  {items[index]}
                  <div className="absolute w-full h-[120px] mt-[-110px]">
                    <div className="half h-full"></div>
                  </div>
                </a>
              </Parallax>
            ))}
          </div>



          <div class="container_news  mt-12">
            <div class="posts">
      
            <div class="posts__item posts__item--main">
              <div class="posts__image">
                <img src="https://res.cloudinary.com/dqhljaplg/image/upload/v1710178733/uobb2gnprhrf9jo2udwp.png" alt="Post image" />
              </div>
              <div class="posts__information">
                <div class="posts__date">
                  4prep
                </div>
                <div class="posts__title">
                  <a href="https://www.youtube.com/channel/UCquabdFpZS4GpDiZ5U4b2CA">{languageChange(language).follow}</a>
                </div>
              </div>
            </div>
      
            <div class="posts__item">
              <div class="posts__image">
                <img src="https://res.cloudinary.com/dqhljaplg/image/upload/v1710605922/ahn2nibrfkq6cgzictyw.jpg" alt="Post image" />
              </div>
              <div class="posts__information">
                <div class="posts__date">
                  4prep
                </div>
                <div class="posts__title">
                  <a href="https://www.instagram.com/p/C4iC3ojrv6z/">{languageChange(language).location}</a>
                </div>
              </div>
            </div>
      
            <div class="posts__item">
              <div class="posts__image">
                <img src="https://res.cloudinary.com/dqhljaplg/image/upload/v1710605921/eqyqn5kryna8e8itjsgb.jpg" alt="Post image" />
              </div>
              <div class="posts__information">
                <div class="posts__date">
                  4prep
                </div>
                <div class="posts__title">
                  <a href="https://www.instagram.com/p/C4fALL9u7Yp/">{languageChange(language).writting}</a>
                </div>
              </div>
            </div>
      
            <div class="posts__item">
              <div class="posts__image">
                <img src="https://res.cloudinary.com/dqhljaplg/image/upload/v1710605921/moz0cwohys6hakvmajxd.jpg" alt="Post image" />
              </div>
              <div class="posts__information">
                <div class="posts__date">
                  4prep
                </div>
                <div class="posts__title">
                  <a href="https://www.instagram.com/p/C3W-UC6sggp/">
                    {languageChange(language).students} 
                  </a>
                </div>
              </div>
            </div>
      
            <div class="posts__item">
              <div class="posts__image">
                <img src="https://res.cloudinary.com/dqhljaplg/image/upload/v1710606914/pktzbpe63miacz6migbm.jpg" alt="Post image" />
              </div>
              <div class="posts__information">
                <div class="posts__date">
                  4prep
                </div>
                <div class="posts__title">
                  <a href="https://www.instagram.com/p/C3zyo3dLqHJ/">{languageChange(language).world}</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )
  }

  export default News
