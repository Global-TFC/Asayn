import React from 'react'
import styled from 'styled-components'
import './About.css'

function About() {
  return (
    <AboutUser className='about'>
        <AboutHead>About</AboutHead>
        <AboutText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </AboutText>
    </AboutUser>
  )
}

const AboutUser = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const AboutText = styled.div`
  font-size: 13px;
`
const AboutHead = styled.h1`
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export default About