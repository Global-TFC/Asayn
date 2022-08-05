import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../includes/navbar/Navbar'
import Sidebar from '../../includes/navbar/Sidebar'

function SRF() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <Outlet/>
    </>
  )
}

export default SRF