import React, { useState } from "react";
import "./signInPage.css";
import { Link } from "react-router";
import { login } from "../../../firebase";

function SignInPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    const [loading,setLoading] =  useState(false);

  const user_auth = async (event)=> {
    event.preventDefault();
    await login(email,password);
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
      <Link to="/">
        <img src="/netflix.svg" alt="" width={110} className="login-logo" />
      </Link>
      <div className="login-form">
        <h1>Sign in</h1>
        <form>
          <input type="email" placeholder="Email" value={email} onChange={(ev)=> setEmail(ev.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(ev)=> setPassword(ev.target.value)}/>
          <button onClick={user_auth} type="submit">Sign in</button>
          <div className="form-help">
            <div className="exist-account">
              <p style={{color:"rgb(181, 181, 181)"}}>Don't have an account?</p>
              <Link to="/sign-up" className="link">
                Sign up
              </Link>
            </div>
            <Link to="/help" className="help">
              Need Help?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
