import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
 

)

export default ContactForm
