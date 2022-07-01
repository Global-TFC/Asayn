import React from 'react'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'
import Home from '../../pages/Students/Home/Home'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <Home/>
    </>
  )
}

export default HomePage