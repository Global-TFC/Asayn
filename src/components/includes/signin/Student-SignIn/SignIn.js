import React from 'react'
import { Link } from 'react-router-dom'
import ClossButten from '../../closs butten/ClossButten'
import { auth } from "../../../firebase/Authentication/Apps/Firebase";
import firebase from "firebase/compat/app";
import Google from "../../../../assets/Logo/google.png"
import Facebook from "../../../../assets/Logo/facebook.png"
function SignIn() {
  const signInWithGoogle = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signInWithFacebook = (e) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <ClossButten />
          </div>
          <h3 className="signup">Login</h3>
          <div className="body">
            <p>As a Student</p>
          </div>
          <div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-center">
            <Link to="#">Forgotten your password?</Link>
            </p>
            <p className="forgot-password text-center">
            Don't have an account? <Link to="/tregister">Sign up</Link>
            </p>
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
        </div>
      </div>
    </>
  )
}

export default SignIn