import React from "react";
import "./PopUp.css";
import Teacher from "./teacher.png";
import Student from "./student.png";
import { Link } from "react-router-dom";

function PopUp() {
  return (
    <>
      <div className="modalBackground">
        <div className="colorbg" >
          <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="body">
              <h3>I am a</h3>
            </div>
            <div className="title ">
              <Link to="/tregister">
                <button className="st-btn">
                  <img className="st" src={Teacher} alt="" />
                  <span>Teacher</span>
                </button>
              </Link>
              <Link to="/register">
                <button className="st-btn">
                  <img className="st" src={Student} alt="" />
                  <span>Student</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;