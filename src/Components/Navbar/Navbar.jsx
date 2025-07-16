import React from 'react'
import assets from '../../assets/assets.js';
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
      <ul className='navbar-menu'>
     <li>home</li>
     <li>menue</li>
     <li>mobile-app</li>
     <li>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar

