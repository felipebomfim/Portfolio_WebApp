import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from "../../wrapper";

import { Tooltip as ReactTooltip } from 'react-tooltip';

import { images } from '../../constants';
import './Skills.scss';

import { client, urlFor } from '../../client';

import imageUrlBuilder from '@sanity/image-url';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const queryExperiences = '*[_type == "experiences"] | order(order asc)';
    const querySkills = '*[_type == "skills"]';
    client.fetch(queryExperiences).then(data => {

      // data = data.filter((el) => (el.icon?.asset !== undefined));

      return setExperience(data)
    }
    )

    client.fetch(querySkills).then(data => {
      data = data.filter((skill) => (skill.icon?.asset !== undefined));

      return setSkills(data)
    }
    )

  }, [])



  return (
    <>
      <h2 className='head-text'><span>Skills</span> and Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ background: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience?.map((exp) =>
            <motion.div
              className='app__skills-exp-item'
              key={'experience-' + exp.order}
            >
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-head'
                key={'head-' + exp.order}
                data-tip
                data-tooltip-id={'description-' + exp.order}
              >
                <p className='bold-text'>{exp.role}</p>
                <p className='company-bold-text'>{exp.company}</p>
                <p className='p-text'>{exp.period}</p>

              </motion.div>

              <ReactTooltip
                id={'description-' + exp.order}
                effect="solid"
                arrowColor="#fff"
                place='top'
                className="app__skills-exp-description"
              >
                {exp.description}
              </ReactTooltip>



              {/* <motion.div className='app__skills-exp-works'>
                {exp.works.map((work) => (

                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{exp.period}</p>

                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.period}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div> */}

            </motion.div>

          )}


        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')