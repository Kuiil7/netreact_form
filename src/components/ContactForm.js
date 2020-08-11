import React from 'react'
import '../styles/ContactForm.css'


const ContactForm = () => (
  
  <div id="contact" netlify className="bg-dark">

 
<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>

)

export default ContactForm
