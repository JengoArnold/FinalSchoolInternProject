import React ,{useState} from 'react'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile
} from "./Firebase";
function SignUp() {
  
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");


const handleSignup = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User created:", userCredential.user);

    alert("Account created successfully!");

  } catch (err) {
    console.log(err);
    setError(err.message);
  }
};

  return (
    <div>
      
    <div className="login">
      <div className="login-container">
        <div className="login-panel">
          <h1 className="Loginn">SignUp for a school Account</h1>
          <p className="login-subtitle">Create a new account to get started</p>

          <form className="login-form"  onSubmit={handleSignup}>

            <label className="fom-control" htmlFor="email">Name</label>
            <input type="text" id="email" placeholder="Enter your name" className="form-control"  value={name}
  onChange={(e) => setName(e.target.value)}  />
            <label className="fom-control" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="form-control"  value={email}
  onChange={(e) => setEmail(e.target.value)}  />

            <label className="fom-control" htmlFor="password">Enter Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="form-control"  value={password}
  onChange={(e) => setPassword(e.target.value)} />
             <label className="fom-control" htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" className="form-control"  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)} />
  <div className="signupformoptions">
                 <label className='signupterms'>
                    <input type="checkbox" required />
                     i Agree to the terms of service and Privacy policy
                 </label>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
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
