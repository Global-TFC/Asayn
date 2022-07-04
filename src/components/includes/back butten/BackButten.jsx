import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

function BackButten() {
    const navigate = useNavigate();
  return (
    <BackB onClick={() => navigate(-1)}><i class='bx bx-left-arrow-alt'></i></BackB>
  )
}

const BackB = styled.span`
    font-size: 30px;
`

export default BackButten