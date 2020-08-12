import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  

 <div id="contact_form1">
  <form name="contact" >
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>

</form>
 </div>

)

export default ContactForm
