import React from 'react'
import {  Routes, Route } from "react-router-dom";
import CrNavbar from './components/includes/navbar/CrNavbar';
import CrSidebar from './components/includes/navbar/CrSidebar';

//accadamy page
import Accadamypage from './components/pages/Accadamy/Accadamypage';
import TCource from './components/pages/Accadamy/TCource';

function CRF() {
  return (
    <>
        <CrNavbar/>
        <CrSidebar/>
        <Routes>
          <Route index element={<Accadamypage/>} />
          <Route path="tcource" element={<TCource />} />
        </Routes>
    </>
  )
}

export default CRF;