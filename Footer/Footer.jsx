import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#education">Education</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer_socials'>
           <a href="https://instagram.com"><BsInstagram/></a>
           <a href="https://facebook.com"><BsFacebook/></a>
           <a href="https://linkedIn.com"><BsLinkedin/></a>
        </div>

        <div className='footer_copyright'>
          <small>&copy; Aparna Amarnani. All rights reserved</small>
        </div>
      </footer>
  )
}

export default footer
