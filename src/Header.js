import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-logo">
          <div className="logo-badge">
            <img src=" badge.jpg" alt="Logo" className="logo-badge" />
          </div>


          <span className="logo">Jerry International School</span>
        </div>

        <nav className="header-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="header-buttons">
            <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/signup"   className="contactbutto">Sign Up</Link>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
