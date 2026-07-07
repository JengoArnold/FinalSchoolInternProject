import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-details">
        <p className="section-tag">Contact Us</p>
        <h1>We’d love to hear from you</h1>
        <p className="contact-intro">
          Whether you have a question about our services or want to start a new project,
          our team is always ready to help.
        </p>
        <ul className="contact-info">
          <li><strong>Email:</strong> arnoldjaz5@gmail.com</li>
          <li><strong>Phone:</strong> +256 740 969 070</li>
          <li><strong>Address:</strong> Kampala, Uganda</li>
          <li><strong>Hours:</strong> 9:00 AM - 5:00 PM</li>
        </ul>
      </div>

      <div className="contact-form">
        <form className="form">
          <h2>Send us a message</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" className="form-control" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" className="form-control" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Tell us how we can help..." className="form-control"></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
