import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import logo from "../img/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Navbar = () => {

  const { language, changeLanguage, userLanguage } = useGlobalContext();
  const {eng, uz, ru} = language

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="navbar absolute z-20">
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
    </>
  )
}

export default Navbar
