import React from "react";
import {Player} from "video-react"
import "./video-react.css"


function Promo() {
  return (
    <Player
    autoPlay
    muted
    playsInline
    poster="./Thumb.jpg"
    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  />
  );
}

export default Promo;
