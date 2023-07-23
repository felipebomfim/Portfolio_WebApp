import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
// import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/felipe-dos-santos-bomfim/?locale=en_US" target="_blank" rel="noopener noreferrer">
        <div>
          <BsLinkedin></BsLinkedin>
        </div>
      </a>
      <a href="https://github.com/felipebomfim" target="_blank" rel="noopener noreferrer">
        <div>
          <BsGithub></BsGithub>
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;