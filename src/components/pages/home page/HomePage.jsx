import React from 'react'
import Sidebar from '../../includes/navbar/Sidebar';
import Coscard from '../../includes/coscard/Coscard';
import "./homepage.css"
import Banner from '../../includes/banner/Banner';

function Home() {
  return (
    <div>
        <Sidebar/>
        <Banner/>
        <div className="homepage">
          <Coscard/>
          <Coscard/>
          <Coscard/>
          <Coscard/>
         
        </div>
        
    </div>
  )
}

export default Home;