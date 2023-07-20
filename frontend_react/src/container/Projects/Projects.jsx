import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from "../../wrapper";
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <h2 className='head-text'>
        The <span>Projects</span> I'm Most Proud Of
      </h2>

      <div>
        {
          ['Web App', 'APIs' /*'React JS', 'Mobile App'*/, 'All'].map((item, index) =>
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className='app__work-filter-item'
            >
            </div>
          )
        }
      </div>

    </>
  )
}

export default AppWrap(Projects, 'projects')