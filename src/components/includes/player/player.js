import React from "react";
import styled from "styled-components";
import {Player} from "video-react"
import "./video-react.css"

function Player1() {
    return (
      <>
      <div className="promo-bg">
      <VideoPlayer>
        <Player autoPlay muted playsInline poster="./Thumb.jpg" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
      </VideoPlayer>
    </div>
    </>
    );
  }
  
  const VideoPlayer = styled.div`
    width: 100%;
    margin: auto;
    padding: 10px;
    @media (max-width: 768px) {
      width: 100%;
      
    }
  `
  
  export default Player1;
  