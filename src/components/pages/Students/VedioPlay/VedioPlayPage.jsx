import React from 'react'
import styled from 'styled-components'
import Player1 from '../../../includes/player/player'
import Navbar from '../../../includes/navbar/Navbar'
import Sidebar from '../../../includes/navbar/Sidebar'
import BackButten from '../../../includes/back butten/BackButten'

function VedioPlayPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BackButten/>
      <CourseName>VedioTitle</CourseName>
      <CourseDistributer>@course_name</CourseDistributer>
      <SideOne>
        <Player1 />
      </SideOne>
      
    </>
  )
}

const CourseName = styled.h1`
font-size: 20px;
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
const SideOne = styled.div`
  width:65%;
  @media (max-width: 768px) {
    width:100%;
  }
`


export default VedioPlayPage