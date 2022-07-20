import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import About from '../../../includes/cource about/About'
import Promo from '../../../includes/premo-head/Promo'
import Player1 from '../../../includes/player/player'

function Enroll() {
  return (
    <>
      < Promo />
      <PlayerAlign>
        <Player1 />
      </PlayerAlign>
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

const PlayerAlign = styled.div`
  width:50%;
  margin:auto;
  @media (max-width: 768px) {
    width:100%;
  }
`

export default Enroll