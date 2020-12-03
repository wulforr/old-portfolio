import React from 'react'
import './contactPage.css'

export default function ContactPage() {
  return (
    <section className="contact-container">
      <div className="contact-wrapper">
        <div className="form-row">
          <label className="input-label">Name</label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-row">
          <label className="input-label">Email</label>
          <input className="form-input" type="email" />
        </div>
        <div className="form-row">
          <label className="input-label">Message</label>
          <textarea className="form-textarea"></textarea>
        </div>
        <div className="form-row form-btn-row">
          <button className="btn contact-form-btn">Send Message</button>
        </div>
      </div>
    </section>
  )
}
