import React from 'react'
import { useRef } from 'react'
import "./Navbar.css"
import { BsMoon } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'


const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className='header'>
      <h1>CoinTracker</h1>
      <nav className='nav__main nav' ref={navRef}>
        <Link to='/'>CryptoCurrencies</Link>
        <Link to='/exchange'>Exchange</Link>
        <a href='#footer'>About Us</a>

        <input type='search' />

        <span ><BsMoon/></span>
        <button className='nav__btn  nav__close-btn' onClick={showNavbar}>
          <ImCancelCircle />
        </button>

      </nav>

      <button className='nav__btn' onClick={showNavbar}>
        <AiOutlineMenu />
      </button>

    </header>

  )
}

export default Navbar