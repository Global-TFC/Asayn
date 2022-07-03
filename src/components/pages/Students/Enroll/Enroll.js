import React from 'react'
import styled from 'styled-components'
import About from '../../../includes/cource about/About'
import Promo from '../../../includes/video player/Promo'

function Enroll() {
  return (
    <>
    < Promo/>
    <AboutDiv>
      <About />
    </AboutDiv>
    </>
  )
}

const AboutDiv = styled.div`
  margin-top: 10px;
  padding: 10px 10px;
  background-color: #cdedff;
  border-radius: 20px;
`

export default Enroll