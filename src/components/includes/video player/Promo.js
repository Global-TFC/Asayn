import React from "react";
import styled from "styled-components";
import {Player} from "video-react"
// import {AiTwotoneLike} from "react-icons/ai"
import "./video-react.css"


function Promo() {
  return (
    <>
    <VedioPlayer>
      <Player autoPlay muted playsInline poster="./Thumb.jpg" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
    </VedioPlayer>
  {/* <AiTwotoneLike className='like' /> */}
  </>
  );
}

const VedioPlayer = styled.div`
  width: 50%;
  @media (max-width: 768px;) {
    width: 100%;
  }
`

export default Promo;
