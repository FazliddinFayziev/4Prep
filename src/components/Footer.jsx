import React from 'react';
import logo from "../img/logo.png";
import { FaInstagram, FaFacebookF, FaTiktok  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer flex justify-between items-center p-4 lg:p-10 text-neutral-content">
      <img src={logo} alt="4-prep logo" className='w-14 lg:w-20' />
      <p className='text-[8px] lg:text-xl'>Copyright © 2024 - All right reserved</p>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to={'https://www.instagram.com/4prep/'}>
          <FaInstagram className='lg:text-[30px] text-[20px]' />
        </Link>
        <Link to={'https://www.tiktok.com/tag/4prep'}>
          <FaTiktok className='lg:text-[30px] text-[20px]' />
        </Link>
        <Link to={'https://m.facebook.com/4Prep.online/photos/dream-big-start-now/110278194070561/'}>
          <FaFacebookF className='lg:text-[30px] text-[20px]' />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
