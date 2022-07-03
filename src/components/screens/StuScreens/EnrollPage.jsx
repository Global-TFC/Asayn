import React from 'react'
import styled from 'styled-components'
import '../../../theme/GlobalStyles'

import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'
import Enroll from '../../pages/Students/Enroll/Enroll'


function EnrollPage() {
  return (
    <>
    <Navbar />
    <Sidebar/>
    <Enrollscreen >
      <Enroll />
    </Enrollscreen>
    </>
  )
}

const Enrollscreen =styled.div`
    padding-top: 10px;
    padding-left: 6%;
    /* padding-right: 50px;
    padding-bottom: 20px; */
    
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 60px;
    width: 100%;
    }
`

export default EnrollPage