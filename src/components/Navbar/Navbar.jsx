import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
       <img src={logo} alt="Company Logo" className="logo" />

        <ul className={mobileMenu ? 'mobile-menu' : 'hide-mobile-menu'}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/ProductCatalog" onClick={closeMenu}>Product Catalog</NavLink></li>
          <li><NavLink to="/ProductsPage" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/AboutUs" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/ContactUs" onClick={closeMenu}>Contact Us</NavLink></li>
        </ul>

        <img 
          src={menu_icon} 
          alt="Menu Icon" 
          className="menu_icon" 
          onClick={toggleMenu} 
        />
      </nav>

      {/* Overlay */}
      {mobileMenu && <div className="overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default Navbar
