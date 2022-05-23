import React from 'react'
import {Outlet } from "react-router-dom"
import styled from 'styled-components';

import Sidebar from '../../includes/navbar/Sidebar';
import Banner from '../../includes/banner/Banner';
import HomeCont from '../../screens/home/HomeCont';


function Home() {
  return (
    <>
    <Homepagee>
      <Sidebar />
      <Banner />
      <HomeCont/>
    </Homepagee>
    <Outlet/>

    </>
  )
}

const Homepagee = styled.div``;

export default Home;