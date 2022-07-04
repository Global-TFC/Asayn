import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'
import Card from '../../includes/coscard/Card'
import './CourcePage.css'
import { Link } from 'react-router-dom'


function CoursePage() {
  return (
    <Fragment>
        <Navbar/>
        <Sidebar/>
        <CourseName className='promo'>Cource Name</CourseName>
        <CourseDistributer className='name'>@distruputer name</CourseDistributer>
        <Link to={"/community"}>
          <button className='right'>Join Communty</button>
          </Link>
          
         
     </Fragment>
  )
}

const CoursePageBanner = styled.div`
    height: 25%;
    width: 100%;
    background: #b4ddff;
    border-radius: 20px;
`
const CourseName = styled.h1`
  padding-left: 10px;
  
`
const CourseDistributer = styled.p`
  padding-left: 20px;
  
`


export default CoursePage