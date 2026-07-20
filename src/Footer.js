import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
         
          <div>
            <h3>Jerry International School</h3>
            <p>
              Providing a safe, inspiring, and high-quality learning environment
              for students to grow academically and personally.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@jerryschool.com</li>
            <li>Phone: +254 700 000 000</li>
            <li>Location: Kampala, Uganda</li>
          </ul>
          <div className="social-links">
            <a href="https://www.facebook.com/jerryschool" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.twitter.com/jerryschool" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.instagram.com/jerryschool" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Jerry International School. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
