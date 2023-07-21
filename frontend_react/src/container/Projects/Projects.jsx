import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from "../../wrapper";
import './Projects.scss';

import { images } from '../../constants';

const Projects = () => {


  const projects = [
    {
      title: 'Web-Dev Title',
      description: `A description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris lorem. Vivamus egestas ligula ut est ornare lobortis. Sed malesuada maximus tortor, at mollis risus viverra eget. Donec mollis pulvinar velit vel interdum.`,
      projectLink: '#projects',
      codeLink: 'https://github.com/felipebomfim/',
      imgUrl: images.about_web_development,
      tags: ['web app', 'all']
    },
    {
      title: 'Web-Dev Title',
      description: `A description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris lorem. Vivamus egestas ligula ut est ornare lobortis. Sed malesuada maximus tortor, at mollis risus viverra eget. Donec mollis pulvinar velit vel interdum.`,
      projectLink: '#projects',
      codeLink: 'https://github.com/felipebomfim/',
      imgUrl: images.about_web_development,
      tags: ['web app', 'all']
    },
    {
      title: 'Web-Dev Title',
      description: `A description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris lorem. Vivamus egestas ligula ut est ornare lobortis. Sed malesuada maximus tortor, at mollis risus viverra eget. Donec mollis pulvinar velit vel interdum.`,
      projectLink: '#projects',
      codeLink: 'https://github.com/felipebomfim/',
      imgUrl: images.about_web_development,
      tags: ['web app', 'all']
    },
    {
      title: 'API Title',
      description: `A description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris lorem. Vivamus egestas ligula ut est ornare lobortis. Sed malesuada maximus tortor, at mollis risus viverra eget. Donec mollis pulvinar velit vel interdum.`,
      projectLink: '#projects',
      codeLink: 'https://github.com/felipebomfim/',
      imgUrl: images.about_backend,
      tags: ['apis', 'all']
    },
    {
      title: 'API Title',
      description: `A description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris lorem. Vivamus egestas ligula ut est ornare lobortis. Sed malesuada maximus tortor, at mollis risus viverra eget. Donec mollis pulvinar velit vel interdum.`,
      projectLink: '#projects',
      codeLink: 'https://github.com/felipebomfim/',
      imgUrl: images.about_backend,
      tags: ['apis', 'all']
    },
  ]

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  const [filterProjects, setFilterProjects] = useState([...projects])
  const handleProjectsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])
      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((el) => el.tags.includes(item.toLowerCase())))
      }
    }, 700);


  }


  return (
    <>
      <h2 className='head-text'>
        The <span>Projects</span> I'm Most Proud Of
      </h2>

      <div className='app__projects-filter'>
        {
          ['All', 'Web App', 'APIs'].map((item, index) =>
            <div
              key={index}
              onClick={() => handleProjectsFilter(item)}
              className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          )
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__projects-portfolio'
      >
        {filterProjects.map((project, index) => (
          <div className='app__projects-item app__flex' key={index}>
            <div className='app__projects-img app__flex'>
              <img src={project.imgUrl} alt={project.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__projects-hover app__flex'
              >
                <a href={project.projectLink}> {/*target="_blank" rel="noopener noreferrer"*/}
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye></AiFillEye>
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub></AiFillGithub>
                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className='app__projects-content app__flex'>
              <h4 className='bold-text'>{project.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{project.description}</p>

              <div className='app__projects-tag app__flex'>
                <p className='p-text'>{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}

      </motion.div>

    </>
  )
}

export default AppWrap(Projects, 'projects')