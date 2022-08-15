import React from 'react'
import { Routes, Route } from "react-router-dom";
import Groups from './Groups';

function ChatRout() {
  return (
    <>
        <Routes>
            <Route>
                <Route index element={<Groups/>} />
            </Route>
        </Routes>
    </>
  )
}

export default ChatRout