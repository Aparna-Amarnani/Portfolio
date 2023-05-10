import React from 'react'
import './Header.css'
import CTA from './CTA'
import image from '../../assets/me.png'
const header = () => {
  return (
    <header>
    <div className="container header_container">
      <h5>Hello, I'm</h5>
      <h1>Aparna Amarnani</h1>
      <h5 className="text-light">Full time Student</h5>
      <CTA />
      
      <div className="me">
        <img src={image} alt="" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
    </header>
  )
}

export default header