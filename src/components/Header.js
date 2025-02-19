import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

function Header() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (
    <header className='fixed w-full px-[30px] 
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex
    items-center'>
      <div className="flex flex-col lg:flex-row 
      lg:items-center w-full justify-between">
        {/* logo */}
        <Link to="/" 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='max-w-[200px] '>
          <img src={Logo} alt="" />
        </Link>
        {/* nav initially hidden - show on desktop */}
        <nav className='hidden xl:flex gap-12 
        font-semibold'>
        <Link to='/' className='text-[#696c6d] hover:text-primary 
          transition'
          >Home
        </Link>
        <Link to='/about' className='text-[#696c6d] hover:text-primary 
          transition'
          >About
        </Link>
        <Link to='/portfolio' className='text-[#696c6d] hover:text-primary 
          transition'
          >Portfolio
        </Link>
        <Link to='/contact' className='text-[#696c6d] hover:text-primary 
          transition'
          >Contact
        </Link>
        </nav>
      </div>
       {/* socials */}
       <Socials />
        {/* mobile nav */}
        <MobileNav />
    </header>
  );
}

export default Header;
