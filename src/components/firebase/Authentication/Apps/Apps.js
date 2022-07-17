import React from 'react'
import Google from './Logo/google.png'
import './Apps.css'

function Apps() {
  return (
    <div>
      <p>OR</p>
    <div>
      <button className="sign-in-btn">
        <img src={Google} alt="" />
        <span>Google</span>
      </button>
    </div>
    </div>
  )
}

export default Apps