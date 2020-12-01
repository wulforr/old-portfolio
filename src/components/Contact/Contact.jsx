import React from 'react'
import './contact.css'
import Email from '../../assets/EmailIcon.svg'

export default function Contact() {
  return (
    <section className="contact">
      {/* <div className="contact-heading">
        Start a Project
      </div>
      <div className="contact-text">
        I am interested to get in touch with you.
      </div>
      <div className="contact-btn-wrapper">
        <button className="btn contact-btn">Let's do this!</button>
      </div> */}
      <div className="contact-icon">
        <img src={Email} alt="email icon" />
      </div>
      <div className="contact-desc">
        <div>
          <div className="contact-heading">
            Start a Project
          </div>
          <div className="contact-text">
            I am interested to get in touch with you.
          </div>
        </div>
        <div className="contact-btn-wrapper">
          <button className="btn contact-btn">Let's do this!</button>
        </div>
      </div>
    </section>
  )
}
