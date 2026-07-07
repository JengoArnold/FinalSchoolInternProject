import React from 'react'
import "./AboutUs.css"

function AboutUs() {
 
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1 className="about-us-title">About Jerry International School</h1>
        <p className="about-subtitle">Empowering minds, inspiring futures</p>
      </div>

      <div className="AboutWe-container">
        <div className="about-text">
          <h2>Welcome to Our Community</h2>
          <p>We are a leading educational institution committed to providing high-quality education and fostering a nurturing environment for our students. Our dedicated faculty and staff work tirelessly to ensure that every student receives the support and guidance they need to succeed academically and personally.</p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Excellence in Education</h3>
              <p>World-class curriculum designed to develop critical thinking and creativity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Holistic Development</h3>
              <p>We nurture academic, social, and personal growth in every student.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Focus</h3>
              <p>Building strong relationships between students, teachers, and families.</p>
            </div>
          </div>
        </div>

        <div className="AboutWe-image">
          <img src="/Image.jpg" alt="About Us" className="AboutWeimage" />
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Students</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Faculty Members</p>
        </div>
        <div className="stat-item">
          <h3>25+</h3>
          <p>Years of Excellence</p>
        </div>
      </div>
      <div>
        <h1 className="about-us-title">Our Mission</h1>
        <p className="about-subtitle">To provide a nurturing and stimulating environment that empowers students to achieve their full potential and become responsible global citizens.</p>
      </div>
    </div>
  )
}

export default AboutUs;
