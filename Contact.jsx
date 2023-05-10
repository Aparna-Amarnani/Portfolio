import React from 'react'
import './Contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
 const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ify2v8n', 'template_q53brxe', form.current, 'ROssJcC9metH7blb1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
          <div className='contact_options'>
           <article className='contact_option'>
             <AiTwotoneMail/>
             <h4>Email</h4>
             <h5>aparnaamarnani03@gmail.com</h5>
             <a href="mailto:aparnaamarnani03@gmail.com" target="blank">Send a message</a>
           </article>
           <article className='contact_option'>
             <FaFacebookMessenger/>
             <h4>Messenger</h4>
             <h5>aparnaamarnani</h5>
             <a href="https://www.instagram.com/direct/inbox/" target="blank">Send a message</a>
           </article>
           <article className='contact_option'>
             <BsWhatsapp/>
             <h4>Whatsapp</h4>
             <a href="https://api.whatsapp.com/send?phone=+917005748769" target="blank">Send a message</a>
           </article>
          </div>
          <form  ref={form} onSubmit={sendEmail}>
         
           <input type="text" name='name' placeholder='Your full name' required />
           <input type="email" name='email' placeholder='Your Email' required />
           <textarea name="message" rows="7" placeholder='Your message' required></textarea>
           <button type='submit' className='btn btn-primary'>send message</button>
          </form>
      </div>
    </section>
  )
}

export default contact