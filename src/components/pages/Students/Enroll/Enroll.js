import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
    <div class="container pt-3 ">
        <div class="col-md-12 text-center ">
          <Link to={"/coursenamehome"}>
            <Button type="button" class="btn btn-primary w-50">Join</Button>
          </Link>
        </div>
    </div>
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