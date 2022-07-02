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
  padding: 90px 10px;
  background-color: #cdedff;
`

export default Enroll