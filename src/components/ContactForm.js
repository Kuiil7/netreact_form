import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

 <div id="contact_form1">
<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
  <textarea name="message"></textarea>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

 
 </div>

)

export default ContactForm
