import React from 'react'
import styled from 'styled-components'
import cardimg from './course.png'
import "../../../theme/GlobalStyles"
import { Link, Outlet } from 'react-router-dom'

function Coscard() {
  return (
    <Link to={"cosname"} >
    <Homeset className='homeset'>
      <Carddiv className='card'>
        <Imgdiv className="cosimgdiv">
          <Cosimg src={cardimg} alt="themnile" />
        </Imgdiv>
        <Cosdtl className="cosditls">
          <Cosname>Course Name</Cosname>
          <Cosdeatles>Account</Cosdeatles>
          <Cosdeatles>Lesson</Cosdeatles>
        </Cosdtl>
      </Carddiv>
      </Homeset>
      <Outlet/>
      </Link>

  )
}

const Homeset = styled.div`
  padding: 5px;
  width: auto;
  cursor: pointer;
`;
const Carddiv = styled.div`
  color: #000;
  max-width: 20rem;
`;
const Imgdiv = styled.div`
  background: #c8e8f5;
`;
const Cosimg = styled.img``;
const Cosdtl = styled.div`
      color: #000;
`;
const Cosname = styled.h4`
  color: #000;
  padding: 5px 3px 3px 3px;
`;
const Cosdeatles = styled.span`
  color: #000;
  padding: 5px 3px 3px 3px;
`;


export default Coscard;