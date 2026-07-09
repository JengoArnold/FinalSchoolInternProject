import React from 'react'

function SignUp() {
  return (
    <div>
      
    <div className="login">
      <div className="login-container">
        <div className="login-panel">
          <h1 className="Loginn">SignUp for a school Account</h1>
          <p className="login-subtitle">Create a new account to get started</p>

          <form className="login-form">
            <label className="fom-control" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-control" />

            <label className="fom-control" htmlFor="password">Enter Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-control" />
             <label className="fom-control" htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" className="form-control" />
  <div className="signupformoptions">
                 <label className='signupterms'>
                    <input type="checkbox" required />
                     i Agree to the terms of service and Privacy policy
                 </label>
              </div>
            <button className="btn btn-primary form-control" type="submit">Sign Up</button>
            <p className='signupswitch'>
             Already have account? <a href='/login'>Login</a>
          </p>
          </form>
        </div>
      </div>
    </div>

 


    </div>
  )
}

export default SignUp
