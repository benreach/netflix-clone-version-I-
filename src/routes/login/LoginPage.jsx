import React, { useState } from "react";
import "./loginPage.css";
import { Link } from "react-router";
import { signup } from "../../../firebase";

function LoginPage() {



  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] =  useState(false);


  const user_auth = async (event)=> {
    event.preventDefault();
    await signup(name,email,password);
    setLoading(true)
  }

  if(loading){
    return(
      <div className="loading">
        <img src="/loading.gif" width={60}/>
      </div>
    )
  }

  return (
    <div className="login">
      <img src="/netflix.svg" alt="" width={110} className="login-logo" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Your name..." value={name} onChange={(ev)=>setName(ev.target.value)}/>
          <input type="email" placeholder="Email" value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(ev)=>setPassword(ev.target.value)}/>
          <button onClick={user_auth} type="submit">Sign up</button>
          <div className="form-help">
            <div className="form-help-container">
              <input type="checkbox"style={{backgroundColor:"rgb(181, 181, 181)"}} />
              <label htmlFor="" style={{color:"rgb(181, 181, 181)"}}>Remember me</label>
            </div>
            <div className="exist-account">
              <p style={{color:"rgb(181, 181, 181)"}}>Already have an account?</p>
              <Link to="/sign-in" className="link">Sign in</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
