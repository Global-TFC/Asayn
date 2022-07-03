import React from "react";
import styled from "styled-components";
import {Player} from "video-react"
// import {AiTwotoneLike} from "react-icons/ai"
import "./video-react.css"


function Promo() {
  return (
    <>
    <div className="promo-bg">
      <CourseName>Cource Promo</CourseName>
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
  margin: auto;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`

const CourseName = styled.h1`
  padding-left: 10px;
`

export default Promo;