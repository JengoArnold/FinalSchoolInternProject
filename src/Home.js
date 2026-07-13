import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>          
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
          <a href="/SchoolForm.pdf"  className="contactbutton"  target="_blank" rel="noopener noreferrer">Register</a>
        </div>

        <div className="home-highlights">
          <span>✔ Experienced Teachers</span>
          <span>✔ Modern Facilities</span>
          <span>✔ Global Learning</span>
        </div>
      </div>
    </section>

    <div>
<div className="about-us">
      <h1 className="about-us-title">AboutUs</h1>
      <p >Welcome to Jerry International School</p>

      <div className="AboutWe-container">
<div className=" about-text  ">
  <p >We are a leading educational institution committed to providing high-quality education <br></br> Fostering a nurturing environment for our students. <br></br> Our dedicated faculty and staff work tirelessly to ensure that every student receives <br></br> the support and guidance they need to succeed academically and personally.</p>

</div>
<div className="AboutWe-image">
  <img src="/Image.jpg" alt="About Us" className="AboutWeimage" />
</div>

      </div>
    </div>
    </div>
     <div className="about-us-title">
    Why Choose Jerry International School?<br></br>
  </div>
<div className="AboutWe-container">
 
<div className="AboutWe-image">
 <img src="/Reading.jpg" alt="About Us" className="AboutWeimage" />
  </div>

  <div className=" about-text  ">
At Jerry International School, we offer a Cambridge curriculum paired with exceptional facilities. Our well-equipped science lab, practical computing, and music class provide dynamic learning environments.<br></br> <br></br> Students enjoy a spacious library filled with a wide selection of books, while our child-friendly swimming pool, under expert coaching, ensures both fun and skill development.<br></br>
<br></br>
Our goal is to provide a balanced education that nurtures both academic excellence and personal growth in a safe, supportive environment.  
  </div>
  
</div>



     </div>


    
  )
}

export default Home
