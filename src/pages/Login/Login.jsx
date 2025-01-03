// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWM5ZjNhYTNlZmRiMjYxNDA4MzRmNGRkMjIyMDRhYyIsIm5iZiI6MTczNTcwNjMyMS40NTcsInN1YiI6IjY3NzRjNmQxZTljYWMwN2VjNDEzMDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEk7JBFLJRFA6GpkwWo205tgdJaNTmB3bIjHxwtZBTs

// API Key
//61c9f3aa3efdb26140834f4dd22204ac


import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/logo.png'
import { login,signUp } from '../../firebse';

const Login = () => {


  const [signState, setSignState] = useState('Sign In');
  const [name , setName]= useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword]= useState("");

  const user_auth = async(event)=>{
    event.preventDefault(); 

    if(signState === "Sign In"){
      await login(email,password);
    }
    else{
      await signUp(name,email, password);
    }
  };




  return ( 
    <div className='login'>

      <img src={logo} alt="" className='login-logo' />

      <div className="login-form">

        <h4>{signState}</h4>

        <form >
          {signState === "Sign Up" ? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name' /> : <></>}

          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>

          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p className="small-text" onClick={() => setSignState("Sign Up")} >New to Netflix  <span >Sign Up Now</span></p> : <p className="small-text">Already have account <span onClick={() => setSignState("Sign In")} >Sign In  Now</span></p>}



        </div>




      </div>




    </div>
  )
}

export default Login