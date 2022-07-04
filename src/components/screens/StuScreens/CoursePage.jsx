import React from 'react'
import styled from 'styled-components'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'

function CoursePage() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <CoursePageBanner></CoursePageBanner>
        <CourseName>Cource Promo</CourseName>
        <CourseDistributer>@distruputer name</CourseDistributer>
    </div>
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