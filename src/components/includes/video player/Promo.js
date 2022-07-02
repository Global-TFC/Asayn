import React from "react";
import styled from "styled-components";
import {Player} from "video-react"
import "./video-react.css"


function Promo() {
  return (
    <VedioPlayer>
    <Player
    autoPlay
    muted
    playsInline
    poster="./Thumb.jpg"
    src="##"
    //https://media.w3.org/2010/05/sintel/trailer_hd.mp4
  />
  </VedioPlayer>
  );
}

const VedioPlayer = styled.div`
  width: 50%;
`

export default Promo;
