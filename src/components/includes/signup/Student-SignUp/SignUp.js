import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Apps from "../../../firebase/Authentication/Apps/Apps";
import ClossButten from "../../closs butten/ClossButten";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../navbar/Sidebar";
import "../Teacher-SignUp/SignUp.css";
import {auth} from '../../../firebase/Authentication/Apps/Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


function SignUp() {
  const [user] = useAuthState(auth);
  return (
    <>
    <Navbar/>
    <Sidebar/>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <ClossButten />
          </div>
          <h3 className="signip">Register</h3>
          <div className="body">
            <p>As a Student</p>
          </div>
          <div>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
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
              Already have an account? <Link to="slogin">sign in</Link>
            </p>
            {<Apps />}
          </div>
          <Outlet/>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;