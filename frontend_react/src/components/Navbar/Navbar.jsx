import React, { useState } from 'react'
import './Navbar.scss'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="#home">
          <img src={images.felipe_logo} alt="logo" />
        </a>
      </div>
      <ul className='app__navbar-links'>
        {
          ['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>
      <div className="app__navbar-menu" >
        <HiMenuAlt4 onClick={() => { setToggle(true) }}></HiMenuAlt4>

        {
          toggle &&
          (<motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className='app__navbar-menu-motion-div'
            style={{ opacity: 0 }}
          >
            <HiX onClick={() => setToggle(false)}></HiX>

            <ul>
              {

                ['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)} >
                      {item}
                    </a>
                  </li>
                ))
              }
            </ul>
          </motion.div>)
        }
      </div>
    </nav>
  )
}

export default Navbar