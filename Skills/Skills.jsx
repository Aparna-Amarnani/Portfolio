import React from 'react'
import './Skills.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const skills = () => {
  return (
    <section id='skills'>
       <h2>Skills</h2>
         <div className="container_skill">
          <div className="skill">
          <div className="skill_list">
          <ul>
            <li>
              <AiFillCheckCircle className='skill_icon' />
              Java</li>
            <li><AiFillCheckCircle className='skill_icon' />C++</li>
            <li><AiFillCheckCircle className='skill_icon' />C</li>
            <li><AiFillCheckCircle className='skill_icon' />HTML</li>
            <li><AiFillCheckCircle className='skill_icon' />CSS</li>
            <li><AiFillCheckCircle className='skill_icon' />JavaScript</li>
            <li><AiFillCheckCircle className='skill_icon' />React</li>
            <li><AiFillCheckCircle className='skill_icon' />Creative Writing</li>
            <li><AiFillCheckCircle className='skill_icon' />Design</li>
          </ul>
         </div>
         </div>
         </div>
    </section>
  )
}

export default skills
