import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>

      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/ProductCatalog'>Products</NavLink></li>
        <li><NavLink to='/AboutUs'>About Us</NavLink></li>
        <li><NavLink to='/ContactUs'>Contact Us</NavLink></li>
      </ul>

      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>


    </nav>
  )
}

export default Navbar
