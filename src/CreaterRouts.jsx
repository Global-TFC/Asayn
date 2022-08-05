import React from 'react'
import {  Routes, Route, Outlet } from "react-router-dom";
import CrNavbar from './components/includes/navbar/CrNavbar';
import CrSidebar from './components/includes/navbar/CrSidebar';

//accadamy page

function CRF() {
  return (
    <>
        <CrNavbar/>
        <CrSidebar/>
        <Outlet/>
    </>
  )
}

export default CRF;