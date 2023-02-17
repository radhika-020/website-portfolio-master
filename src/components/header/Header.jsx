import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/radhika2.jpg'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there, I'm</h5>
        <h1>Radhika Arora</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}
 
export default header