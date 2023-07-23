import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './About.scss';

import { images } from '../../constants';

import { AppWrap } from '../../wrapper';

import { client, urlFor } from '../../client';





const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then(data => {
      // console.log(data[0].imgUrl.asset._ref);

      data = data.filter((about) => (about.imgUrl.asset !== undefined));

      return setAbouts(data)
    }
    )

  }, [])

  return (
    <div>
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
              <img src={urlFor(about.imgUrl.asset._ref)} alt={about.title + ' image'} />
              <h2 className='bold-text' style={{ marginTop: 20, textAlign: 'center', width: '100%' }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrap(About, 'about', 'app__whitebg')