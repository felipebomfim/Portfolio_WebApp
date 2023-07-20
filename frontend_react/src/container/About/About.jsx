import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './About.scss';

import { images } from '../../constants';

const abouts = [
  {
    title: 'Web Development',
    description: `Graduating as a computer engineer from the renowned Aeronautics Institute of Technology (ITA), I've dedicated myself to the field of web development, applying the rigorous and robust training I received during my academic years. 
    
    This foundational knowledge coupled with my industry experience has honed my abilities in creating efficient and user- friendly websites.`,
    imgUrl: images.about_web_development
  },
  {
    title: 'Backend Development',
    description: `As a computer engineer, I specialized in Node.js backend development, proficiently handling server-side logic, constructing reliable APIs, and working with databases. My expertise extends to Python and Java, complementing my Node.js skills and enabling flexibility across various programming environments. This diverse knowledge contributes to my comprehensive and adaptable approach to web software development.`,
    imgUrl: images.about_backend
  },
  {
    title: 'DevOps Culture',
    description: `I strongly adhere to the DevOps culture and Cloud Technology in my software development approach. I believe in fostering collaboration between development and operations, optimizing systems, and embracing an iterative process that prioritizes continuous integration and delivery. This philosophy streamlines my work, enhances efficiency, and fosters robust, reliable software products.`,
    imgUrl: images.about_devops
  }
  // {
  //   title: 'Web Development',
  //   description: 'Description',
  //   imgUrl: images.about04
  // }
]

const About = () => {
  return (
    <div id='about'>
      <h2 className='head-text'>
        <span>About</span> Me
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title + ' image'} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default About