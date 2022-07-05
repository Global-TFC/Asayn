import React, { Fragment } from 'react'
import styled from 'styled-components'
import BackButten from '../../includes/back butten/BackButten'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'
import './CourcePage.css'
import { Link } from 'react-router-dom'
import Vidcard from '../../includes/vedio card/Vidcard'


function CoursePage() {
  return (
    <Fragment>
        <Navbar/>
        <Sidebar/>
        <CoursePageBanner>
        </CoursePageBanner>
        <BackButten/>
        <CourseName>Cource Promo</CourseName>
        <Link to={"/community"}>
          <JoinBtn className='right'>Join Communty</JoinBtn>
        </Link>
        <CourseDistributer>@distruputer name</CourseDistributer>         
        <Vidcard/>
     </Fragment>
  )
}

const CoursePageBanner = styled.div`
  padding: 10px;
  height: 190px;
  border: 5px solid white;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #cdedff;
  @media (max-width: 768px) {
    height: 120px;
  }
`
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
const JoinBtn = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  margin-top: 20px;
  margin-right: 50px;
  float: right;
  background-color: #4183f5 ;
  color: white;
  font-weight: 700;
  border: none;
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }

`

export default CoursePage