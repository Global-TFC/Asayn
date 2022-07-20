import React from 'react'
import { Link } from 'react-router-dom'
import Apps from '../../../firebase/Authentication/Apps/Apps'
import ClossButten from '../../closs butten/ClossButten'


function SignIn() {
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
            {<Apps />}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn