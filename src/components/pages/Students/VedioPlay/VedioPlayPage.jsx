import React from 'react'
import styled from 'styled-components'
import Player1 from '../../../includes/player/player'
import Navbar from '../../../includes/navbar/Navbar'
import Sidebar from '../../../includes/navbar/Sidebar'
import BackButten from '../../../includes/back butten/BackButten'
import Playlist from '../../../includes/playlist/PlayList'
import { Link } from 'react-router-dom'

function VedioPlayPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BackButten />
      <CourseName>VedioTitle</CourseName>
      <Link to="/acadamyname" >
        <CourseDistributer>@distruputer name</CourseDistributer>
      </Link>
      <VedioPage>
        <SideOne>
          <Player1 />
        </SideOne>
        <SideTwo>
          <Playlist />
        </SideTwo>
      </VedioPage>
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
const VedioPage = styled.div`
  width:100%;
  display:flex;
  @media (max-width: 768px) {
    display:block;
  }
`

const SideOne = styled.div`
  width:65%;
  @media (max-width: 768px) {
    width:100%;
  }
`
const SideTwo = styled.div`
  width:25%;
  padding-top:20px;
  @media (max-width: 768px) {
    width:100%;
    max-width:786px;
    
  }
`


export default VedioPlayPage