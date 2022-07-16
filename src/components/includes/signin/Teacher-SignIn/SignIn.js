import React from 'react'
import { Link } from 'react-router-dom'
import ClossButten from '../../closs butten/ClossButten'


function SignIn() {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <ClossButten />
          </div>
          <h3>Sign In</h3>
          <div className="body">
            <p>As a Teacher</p>
          </div>
          <form>
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
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-center">
              Forgot <link href="#">password?</link>
            </p>
            <p className="forgot-password text-center">
            Don't have an account?  <Link href="tregister">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn