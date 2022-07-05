import React from 'react'
import styled from 'styled-components'
import CosCard from './CosCard'

function Card() {
  return (
    <CardDiv>
        <CosCard />
    </CardDiv>
  )
}

const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 60px;
    width: 100%;
    }
`

export default Card