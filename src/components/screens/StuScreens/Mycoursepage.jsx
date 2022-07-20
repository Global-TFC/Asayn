import React from 'react'
import CosCard from '../../includes/coscard/CosCard'
import styled from 'styled-components'
import BackButten from '../../includes/back butten/BackButten'

function Mycoursepage() {
  return (
    <>
      <BackButten />
      <CourseName>My class</CourseName>
      <CosCard />
    </>
  )
}

const CourseName = styled.h1`
  padding-left: 10px;
  font-size: 30px;
  display: inline;
  @media (max-width: 768px) {
    font-size: 20px;
    
  }
`

export default Mycoursepage