import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ClossButten from "../../closs butten/ClossButten";
import { auth } from "../../../firebase/Authentication/Apps/Firebase";
import firebase from "firebase/compat/app";
import Google from "../../../../assets/Logo/google.png";
import Facebook from "../../../../assets/Logo/facebook.png";

import "./SignUp.css";

function SignUp() {
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
          <h3 className="signip">Register</h3>
          <div className="body">
            <p>As a Creater</p>
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
                Register
              </button>
            </div>
            <p className="forgot-password text-center">
              Already have an account? <Link to="">sign in</Link>
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
      <Outlet />
    </>
  );
}

export default SignUp;
