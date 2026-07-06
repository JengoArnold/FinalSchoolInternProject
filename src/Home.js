import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <p className="home-tag">Excellence in Education</p>
        <h1 className="home-title">Welcome to Jerry International School</h1>
        <p className="home-para">
          We provide a caring, inspiring learning environment where students grow academically,
          socially, and confidently every day.
        </p>

        <div className="home-buttons">
          <Link to="/contact" className="contactbutton">Contact Us</Link>
          <Link to="/about" className="contactbutto">Learn More</Link>
        </div>

        <div className="home-highlights">
          <span>✔ Experienced Teachers</span>
          <span>✔ Modern Facilities</span>
          <span>✔ Global Learning</span>
        </div>

      </div>
    </section>
  )
}

export default Home
