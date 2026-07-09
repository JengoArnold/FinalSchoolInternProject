import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-panel">
          <h1 className=" about-us-title  ">Welcome Back</h1>
          <p className="login-subtitle">Sign in to continue to your account</p>

          <form className="login-form">
            <label className="fom-control" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-control" />

            <label className="fom-control" htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-control" />
           

            <button className="btn btn-primary form-control" type="submit">Login</button>

             <p className='signupswitch'>
             Don't have an account? <a href='/signup'>Sign Up</a>
          </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
