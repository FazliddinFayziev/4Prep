import React from 'react';
import logo from "../img/logo.png";
import { FaInstagram, FaFacebookF  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer flex justify-between items-center p-4 lg:p-10 text-neutral-content">
      <img src={logo} alt="4-prep logo" className='w-14 lg:w-20' />
      <p className='text-[10px] lg:text-xl'>Copyright © 2024 - All right reserved</p>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <FaInstagram className='lg:text-[30px] text-[20px]' />
        <FaXTwitter className='lg:text-[30px] text-[20px]' />
        <FaFacebookF className='lg:text-[30px] text-[20px]' />
      </nav>
    </footer>
  )
}

export default Footer
