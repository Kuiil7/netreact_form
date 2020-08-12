import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  
  <div className="form-container" className="bg-dark">
<p>
  Contact Me
</p>
<form name="contact" method="post" netlify className="contact-form" >
<div className="form-field">
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
       
    <button className="btn bg-warning" type="submit">Send</button>

  
        </form>
  </div>

)

export default ContactForm
