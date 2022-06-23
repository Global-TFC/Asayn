import React from 'react'
import {  Link } from "react-router-dom";
// import Logo from "./mobile.jpg";
import './Home.css'

function Mobile() {
  return (
    <div className = "mobile-container">
      <h1 className="title">Knolsort</h1>
      <div className="left">
        {/* <img className="mobile" src={Logo} alt="mobail-pic"/> */}
        <div className='mob-links'>
          <Link to="/" className="btn0">Home</Link>
          <Link to="About" className="btn1">About</Link>
          <Link to="Contact" className="btn2">Contact</Link>
        </div>
        <Link to="What" className="ques">What is Knolsort?</Link>
        <Link  to="Benfit" className="ques1">What is Benfit of this?</Link>
        <Link to="Use" className="ques2">How to Use</Link>
        <Link to={"/signup"} className="btn-login">Login</Link>
        <Link to={"/signin"} className="btn-signin">Sign In</Link>
      </div>
      
    </div>
  )
}

export default Mobile