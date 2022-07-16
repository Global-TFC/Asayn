import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

function ClossButten() {
  const navigate = useNavigate();
  return (
    <>
      <ClosB onClick={() => navigate(-1)}>x</ClosB>
      
    </>
  )
}

const ClosB = styled.span`
    font-size: 30px;
    cursor: pointer;
    `

export default ClossButten