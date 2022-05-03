import React from "react";
import "./Wlcm.css";
import learn from "./icons/learning.svg";

function Wlcm() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Welcome to Knolsort</h1>
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
          <br /> when an unknown printer took a galley{" "}
        </p>
        <button className="btn">Get Start</button>
      </div>
      <div className="icon">
        <img src={learn} />
      </div>
    </div>
  );
}

export default Wlcm;