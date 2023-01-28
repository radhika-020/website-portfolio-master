import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I possess</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development (Beginner)</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

           
          </div>
        </div>
          {/* END OF Frontend */}
        <div className="experience__backend">
          <h3>Backend Development (Beginner)</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>NoSQL</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            {/* <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article> */}

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>C++</h4>
              <small className='text-light'>Beginner</small>
             </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default experience