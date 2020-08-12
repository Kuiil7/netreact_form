import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  
  <div id="contact-form1" className="bg-dark">

<form name="contact" method="post" netlify >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
  </div>

)

export default ContactForm
