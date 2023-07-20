import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
// import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/felipe-dos-santos-bomfim/?locale=en_US" target="_blank" rel="noopener noreferrer">
          <BsLinkedin></BsLinkedin>
        </a>
      </div>
      <div>
        <a href="https://github.com/felipebomfim" target="_blank" rel="noopener noreferrer">
          <BsGithub></BsGithub>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;