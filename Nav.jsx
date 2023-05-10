import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsBookHalf} from 'react-icons/bs'
import {FaHammer} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {BsFillTelephoneFill} from 'react-icons/bs'
const nav = () => {
  return (
    <nav>
         <a href="#" id='active'><AiOutlineHome/></a>
         <a href="#about"><BiUserCircle/></a>
         <a href="#education"><BsBookHalf/></a>
         <a href="#experience"><FaHammer/></a>
         <a href="#skills"><GiSkills/></a>
         <a href="#contact"><BsFillTelephoneFill /></a>
    </nav>
  )
}

export default nav