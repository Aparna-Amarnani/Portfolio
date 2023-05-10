import React from 'react'
import './About.css'
import img1 from '../../assets/me-about.jpg'
const about = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2> 
    <div className="container about_container">
      <div className="about_img">
        <img src={img1} alt="" />
      </div>
      <div className="about_desc">
        <p>
        Hardworking and passionate student
leveraging studies in Computer
Science Engineering seeks real-world
experience as intern at professional
firms. Offers strong interpersonal and
task prioritization skills. Has a keen
interest in front-end web
development and machine learning.
</p>
<div className="button">
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
      </div>
    </div>
    </section>
  )
}

export default about