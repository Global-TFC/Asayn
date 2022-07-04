import React, { Fragment } from 'react'
import styled from 'styled-components'
import BackButten from '../../includes/back butten/BackButten'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'
import './CourcePage.css'
import { Link } from 'react-router-dom'


function CoursePage() {
  return (
    <Fragment>
        <Navbar/>
        <Sidebar/>
        <CoursePageBanner>
        </CoursePageBanner>
        <BackButten/>
        <CourseName>Cource Promo</CourseName>
        <CourseDistributer>@distruputer name</CourseDistributer>
        <Link to={"/community"}>
          <button className='right'>Join Communty</button>
          </Link>
          
         
     </Fragment>
  )
}

const CoursePageBanner = styled.div`
  padding: 10px;
  height: 120px;
  border: 5px solid white;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #cdedff;
`
const CourseName = styled.h1`
  padding-left: 10px;
  display: inline;
`
const CourseDistributer = styled.p`
  padding-left: 40px;
  
`


export default CoursePage