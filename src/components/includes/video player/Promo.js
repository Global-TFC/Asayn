import React from "react";
import styled from "styled-components";
import {Player} from "video-react"
// import {AiTwotoneLike} from "react-icons/ai"
import "./video-react.css"


function Promo() {
  return (
    <>
    <div className="promo-bg">
      <h1>Cource Promo</h1>
    <VideoPlayer>
      <Player autoPlay muted playsInline poster="./Thumb.jpg" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
    </VideoPlayer>
  {/* <AiTwotoneLike className='like' /> */}
  </div>
  </>
  );
}

const VideoPlayer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`

export default Promo;
