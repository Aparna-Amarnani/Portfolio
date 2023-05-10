import React from 'react'
import './Education.css'
const education = () => {
  return (
    <section id='education'>
    <h2>Education</h2>
    <div className="container_education">
        <article className='education'>
           <div className="edu_head">
             <h3>Vellore Institute of Technology</h3>
             <small className='text-light'>Vellore</small>
           </div>
           <div className='edu_det'>
            <h4>
              Undergratuate, Computer Science
            </h4>
            <small className='text-light'>2020-2024</small>
            <h4>
              Current CGPA- 9.47
            </h4>
          </div>
        </article>

        <article className='education'>
           <div className="edu_head">
             <h3>Army Public School</h3>
             <small className='text-light'>Shillong</small>
           </div>
           <div className='edu_det'>
            <h4>
              CBSE, Science(PCM)
            </h4>
            <small className='text-light'>2018-2020</small>
            <h4>
              Percentage: 95.8%
              <br />
              State Rank- 4           
              </h4>
          </div>
        </article>

        <article className='education'>
           <div className="edu_head">
             <h3>Loreto Convent</h3>
             <small className='text-light'>Shillong</small>
           </div>
           <div className='edu_det'>
            <h4>
              ICSE
            </h4>
            <small className='text-light'>2008-2018</small>
            <h4>
              Percentage: 95.6%
              <br />
              State Rank- 3 
            </h4>
          </div>
        </article>
    </div>
    </section>
  )
}

export default education