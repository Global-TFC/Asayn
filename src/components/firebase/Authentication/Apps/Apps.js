import React from 'react'
import Google from './Logo/google.png'
import Facebook from './Logo/facebook.png'
import './Apps.css'
import {auth} from './Firebase';
import firebase from 'firebase/compat/app';


function Apps() {
  const signInWithGoogle = e => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider);
  };
  const signInWithFacebook = e => {
    const provider = new firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider)
  };
  return (
    <div>
      <p>OR</p>
      <button className="sign-in-btn" onClick={signInWithGoogle}>
        <img src={Google} alt="" />
        <span>Google</span> 
      </button>
      <button className="sign-in-btn" onClick={signInWithFacebook}>
        <img src={Facebook} alt="" />
        <span>Facebook</span>
      </button>
    </div>
  )
}

export default Apps