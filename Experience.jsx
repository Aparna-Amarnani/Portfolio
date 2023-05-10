import React from 'react'
import './Experience.css'
const experience = () => {
  return (
    <section id='experience'>
    <h2>Experience</h2>
    <div className="container_exp">
    <div className="exp1">
      <h2>Soft Computing Research Society</h2>
      <div className="exp_content">
          <article className='exp_det'>
            <h4>
              Editorial Head
            </h4>
            <small className='text-light'>Jan 2022-Present</small>
            <br /><br />
            <h4>
              Core Member
            </h4>
            <small className='text-light'>March 2021-Jan 2022</small>
          </article>
      </div>
    </div>

    <div className="exp1">
      <h2>Innovator's Quest VIT</h2>
      <div className="exp_content">
          <article className='exp_det'>
            <h4>
              Senior Core Member (Technical)
            </h4>
            <small className='text-light'>Jul 2021-Present</small>
            <br /><br />
            <h4>
              Senior Core Member (Design)
            </h4>
            <small className='text-light'>Jul 2021-Present</small>
          </article>
      </div>
    </div>
    </div>
    </section>
  )
}

export default experience