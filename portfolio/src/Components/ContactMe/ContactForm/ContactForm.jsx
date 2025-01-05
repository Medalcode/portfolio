import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="dc65838a-ee01-4601-8cfe-a3f9fe309c88" />

            <div className="name-container">
                <input type="text" name="firstname" placeholder='First Name' />
                <input type="text" name="lastname" placeholder='Last Name' />
            </div>
            <input type="email" name="email" placeholder='Email' />
            <textarea name="message" placeholder='Message' rows={3} />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default ContactForm