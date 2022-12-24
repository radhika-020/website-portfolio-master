import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { FaFacebookSquare} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>aradhika880@gmail.com</h5>
          <a href="aradhika880@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className="contact__option">
          <FaFacebookSquare className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>aradhika880@gmail.com</h5>
          <a href="aradhika880@gmail.com" target = '_blank'>Send a message</a>
        </article>

        <article className="contact__option">
          <ImWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>aradhika880@gmail.com</h5>
          <a href="aradhika880@gmail.com" target='_blank'>Send a message</a>
        </article>



      </div>
      {/* END OF CONTACT OPTIONS */}
      <form action="">
        <input type="text" name='name' placeholder='Your Full name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
} 

export default contact