import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (

    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
            <ContactInfoCard
                iconUrl="assets/Images/email.svg"
                text="jonatthan.medalla@gmail.com"
            />
            <ContactInfoCard
                iconUrl="assets/Images/email.svg"
                text="jonatthan.medalla@gmail.com"
            />
            <ContactInfoCard
                iconUrl="assets/Images/email.svg"
                text="jonatthan.medalla@gmail.com"
            />
        </div>
            
            <div style={{flex:1}}></div>

        </div>
    </section>

  )
}

export default ContactMe