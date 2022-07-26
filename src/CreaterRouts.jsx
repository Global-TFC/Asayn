import React from 'react'
import {  Routes, Route } from "react-router-dom";
import CrNavbar from './components/includes/navbar/CrNavbar';
import CrSidebar from './components/includes/navbar/CrSidebar';

//accadamy page
import Accadamypage from './components/pages/Accadamy/Accadamypage';

function CRF() {
  return (
    <>
        <CrNavbar/>
        <CrSidebar/>
        <Routes>
          <Route index element={<Accadamypage/>} />
        </Routes>
    </>
  )
}

export default CRF;