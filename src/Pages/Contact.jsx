import AOS from 'aos';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import logo from "../img/logo.png";
import { useTrail } from '@react-spring/web';
import { Parallax } from 'react-scroll-parallax';
import Loading from '../components/Loading';
import { Footer } from '../components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { languageChange } from '../context/functions';

const Contact = () => {

    const {changeLanguage, language, setUserLanguage} = useGlobalContext();
    const {uz, eng, ru} = language
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const { login } = useGlobalContext();

    const [scrollY, setScrollY] = useState(0);
    const items = [languageChange(language).contact_one, languageChange(language).contact_two];

    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 500, friction: 100 },
      opacity: 1,
      x: 0,
      height: 80 + scrollY * 0.1,
      from: { opacity: 0, x: 20, height: 0 },
    });

    useEffect(() => {
      AOS.init();
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const botToken = '7036069862:AAEvPrzD_11pgNiLugbMRKwQ4SX6TijqxYA';
    const chatId = '-1002031877642';

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
          if(!name || !email || !phone || !message) {
            alert("Fill all inputs")
            return null
          }
          await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              params: {
                chat_id: chatId,
                text: `Name: ${name},\n Phone: ${phone},\n Email: ${email},\n Message: ${message}`,
              },
          });
          alert("Message is sent!")
          setName('')
          setPhone('')
          setEmail('')
          setMessage('')
        } catch (error) {
          alert("Please enter your data!")
        }
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className='main contact_section'>
        <div className="navbar">
            <div className="flex-1">
              <Link to={'/'} className="btn btn-ghost text-xl">
                <img data-aos="fade-up" src={logo} alt="4prep_logo" className='w-[100px]' />
              </Link>
            </div>
            <div data-aos="fade-up" className='flex justify-between gap-5 mr-4'>
            <h1 onClick={() => changeLanguage('uz')} className={`${uz && 'underline'} font-bold cursor-pointer`}>Uz</h1>
            <h1 onClick={() => changeLanguage('eng')} className={`${eng && 'underline'} font-bold cursor-pointer`}>Eng</h1>
            <h1 onClick={() => changeLanguage('ru')} className={`${ru && 'underline'} font-bold cursor-pointer`}>Ru</h1>
            </div>
            {/* <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <HiOutlineMenuAlt4 data-aos="fade-up" fontSize={30} color='#fff' />
              </button>
            </div> */}
        </div>
        
        <div data-aos="fade-up" data-aos-duration="3000" className="about-us flex justify-center mt-8">
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
        {/* FORM */}
        <div data-aos="fade-up" data-aos-duration="3000" className="form-main">
            <div className="main-wrapper">
              <form className="form-wrapper">
                <div className="form-card">
                  <input
                    className="form-input"
                    type="text"
                    name="full_name"
                    required="required"
                    placeholder={languageChange(language).name}
                    autocomplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-card">
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    required="required"
                    placeholder={languageChange(language).email}
                    autocomplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-card">
                  <input
                    className="form-input"
                    type="number"
                    name="phone_number"
                    required="required"
                    autocomplete="off"
                    placeholder={languageChange(language).phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-card">
                  <textarea
                    className="form-textarea"
                    maxlength="420"
                    rows="3"
                    name="phone_number"
                    required="required"
                    autocomplete="off"
                    placeholder={languageChange(language).message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className='flex justify-center my-4'>
			            <button onClick={sendMessage} type='submit' className="hero_button border px-20 py-5 rounded-full font-bold">
                    {languageChange(language).submit}
                  </button>
                </div>
                
              </form>
            </div>
        </div>
        <div className='mt-10'>
            <Footer />
        </div>
      </div>
    )
}

export default Contact