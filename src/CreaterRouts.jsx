import React from 'react'
import {  Routes, Route } from "react-router-dom";

//accadamy page
import Accadamypage from './components/pages/Accadamy/Accadamypage';

function CRF() {
  return (
    <>
        <Routes>
          <Route index element={<Accadamypage/>} />
        </Routes>
    </>
  )
}

export default CRF;