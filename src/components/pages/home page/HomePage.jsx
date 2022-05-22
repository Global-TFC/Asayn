import React from 'react'
import Sidebar from '../../includes/navbar/Sidebar';
import Coscard from '../../includes/coscard/Coscard';
import styled from 'styled-components';
import Banner from '../../includes/banner/Banner';

function Home() {
  return (
    <Homepage>
        <Sidebar/>
        <Banner/>
        <Homecontent >
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
        </Homecontent>
        
    </Homepage>
  )
}

const Homepage = styled.div``;
const Homecontent = styled.div`
    padding-top: 10px;
    padding-left: 6%;
    /* padding-right: 50px;
    padding-bottom: 20px; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    padding-top: 70px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 60px;
    width: 100%;
    }
`;


export default Home;