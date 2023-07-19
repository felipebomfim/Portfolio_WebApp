import React from 'react'
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants'

function Navbar() {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.felipe_logo} alt="logo" />
        {/* <h1 id="my-name">Felipe</h1> */}
      </div>
      <ul className='app__navbar-links'>
        {
          ['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
      <div className="app__navbar-menu" >

      </div>
    </nav>
  )
}

export default Navbar