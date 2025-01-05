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
            <a href="https://github.com/Medalcode" target="_blank" rel="GitHub">
                <ContactInfoCard
                    iconUrl="assets/Images/github.svg"
                    text="https://github.com/Medalcode"
                />
            </a>
            <a href="https://www.linkedin.com/in/medalcode" target="_blank" rel="Linkedin">
                <ContactInfoCard
                    iconUrl="assets/Images/linkedin.svg"
                    text="www.linkedin.com/in/medalcode"
                />
            </a>
        </div>
            
            <div style={{flex:1}}>
                <ContactForm />
            </div>

        </div>
    </section>

  )
}

export default ContactMe