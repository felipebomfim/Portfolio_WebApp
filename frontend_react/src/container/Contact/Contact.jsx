import React from 'react'
import { AppWrap } from "../../wrapper";
import { images } from '../../constants';
import './Contact.scss'

const Contact = () => {
  return (
    <>
      <h2 className='head-text contact-title'>Where You <span>Find Me</span></h2>
      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <div className="logo-div">

            <img src={images.mail} alt="email-logo" />
          </div>
          <div className="contact-div">
            <p className="p-text">felipedossantosbomfim@gmail.com</p>

          </div>
        </div>
        <div className="app__contact-card">
          <div className='logo-div'>
            <a href="https://www.linkedin.com/in/felipe-dos-santos-bomfim/?locale=en_US" target="_blank" rel="noopener noreferrer"><img src={images.linkedin} alt="linkedin-logo"></img></a>
          </div>
          <div className='contact-div'>
            <p className="p-text">linkedin.com/in/felipe-dos-santos-bomfim</p>
          </div>
        </div>
        <div className="app__contact-card">
          <div className="logo-div">
            <a href="https://github.com/felipebomfim" target="_blank" rel="noopener noreferrer"><img src={images.github} alt="github-logo"></img></a>
          </div>
          <div className="contact-div">
            <p className="p-text">github.com/felipebomfim</p>

          </div>
        </div>

      </div >
    </>
  )
}

export default AppWrap(Contact, 'contact', 'app__contact', 'contact')