import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  
  <div class="form-container" className="bg-dark">

 
  <form className="contact-form form-container"  method="post" data-netlify="true">
    <div>
      <p>
        <p id="contact-me-title" >
CONTACT ME          </p>
      </p>
    </div>
    <div className="form-field" >
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button className="btn" id="send_button" type="submit">Send</button>

    <div>
   
    </div>
  </form>
  </div>

)

export default ContactForm
