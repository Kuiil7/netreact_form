import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

 <div id="contact_form1">
  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
 </div>

)

export default ContactForm
