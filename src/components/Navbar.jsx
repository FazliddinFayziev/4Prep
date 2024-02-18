import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import logo from "../img/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="navbar absolute z-20">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">
              <img data-aos="fade-up" src={logo} alt="4prep_logo" className='w-[100px]' />
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <HiOutlineMenuAlt4 data-aos="fade-up" fontSize={30} color='#fff' />
            </button>
          </div>
      </div>
      {/* <div className='absolute w-full h-[50px] z-10 bg-black opacity-[10%]'></div> */}
    </>
  )
}

export default Navbar
