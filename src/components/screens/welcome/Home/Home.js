import React from "react";
import styled from "styled-components";


  


function Home() {
  return (
      <Left>
        <Wellcome >
          Hi, <br />
          Welcome To Knolsort <br />
          Knolsort is a free video sharing website that makes it easy to watch
          online videos.<br /> You can even create and upload your own videos to share
          with others.<br /> Originally created in 2023, YouTube is now one of the
          most popular sites on the Web, <br /> with visitors watching around6 billion
          hours of video every month.<br /> If you've ever watched a video online,
          there's a good chance it was a YouTube video.<br /> For example, almost all
          of the video tutorials on our website are actually YouTube videos!
        </Wellcome>
      </Left>
      
  );
}

const Left = styled.p`
  width: 40%;
  height: 720px;
  background-color: #fff;
  float: left; 
`

const Wellcome = styled.p`
  border: 1px solid black;
  padding: 3%;  
`

export default Home;
