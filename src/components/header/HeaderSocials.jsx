import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/radhika201/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/radhika-020" target="_blank"><FaGithub/></a>
          <a href="https://www.instagram.com/radhika._.201_/" target="_blank"><AiOutlineInstagram/></a>
      </div>
  )
}

export default HeaderSocials