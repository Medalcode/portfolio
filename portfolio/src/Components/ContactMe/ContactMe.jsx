import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (

    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
            <ContactInfoCard
                iconUrl="assets/Images/gmail.svg"
                text="jonatthan.medalla@gmail.com"
            />
            <ContactInfoCard
                iconUrl="assets/Images/github.svg"
                text="https://github.com/Medalcode"
            />
            <ContactInfoCard
                iconUrl="assets/Images/linkedin.svg"
                text="www.linkedin.com/in/jonatthan-rodrigo-medalla-aliste-b0672a249

"
            />
        </div>
            
            <div style={{flex:1}}>
                <ContactForm />
            </div>

        </div>
    </section>

  )
}

export default ContactMe