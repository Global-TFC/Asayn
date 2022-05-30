import React from "react";
import "./Wlcm.css";
import learn from "./icons/learning.svg";
import { Link } from "react-router-dom";
import { ReactTypical } from "@deadcoder0904/react-typical";


function Wlcm() {
  return (
    <div className="banner">
      <div className="content-welcom">
        <h1 className="title">
        <ReactTypical className="typical"
          loop={Infinity}
          wrapper="b"
          steps={[
            'Welcome to KNOLSORT',
            1000,
           'How are You',
            1000
           
          ]}
          />
        </h1>
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
          <br /> when an unknown printer took a galley{" "}
        </p>
        <Link to={"/signin"} className="btn">Get Start</Link>
        <Link to={"/home"} className="btn">Home</Link>
        
      </div>
      <div className="icon">
        <img src={learn} alt="knolsort" />
      </div>
    </div>
  );
}

export default Wlcm;