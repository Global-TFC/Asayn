import React from "react";
import styled from "styled-components";
import BackButten from "../back butten/BackButten";


function Promo() {
  return (
    <>
    <div className="promo-bg">
      <BackButten/>
      <CourseName>Cource Promo</CourseName>
      <CourseDistributer>@distruputer name</CourseDistributer>
   
  </div>
  </>
  );
}


const CourseName = styled.h1`
  padding-left: 10px;
  display: inline;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const CourseDistributer = styled.p`
  padding-left: 40px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export default Promo;
