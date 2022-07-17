import React from 'react'
import Google from './Logo/google.png'
import './Apps.css'
import {auth} from './Firebase';
import firebase from 'firebase/compat/app';


function Apps() {
  const signInWithGoogle = e => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  };
  return (
    <div>
      <p>OR</p>
    <div>
      <button className="sign-in-btn" onClick={signInWithGoogle}>
        <img src={Google} alt="" />
        <span>Google</span>
      </button>
    </div>
    </div>
  )
}

export default Apps