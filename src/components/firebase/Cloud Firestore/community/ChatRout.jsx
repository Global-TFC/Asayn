import React from 'react'
import { Routes, Route } from "react-router-dom";
import Groups from './Groups';
import Community from "./Chat"

function ChatRout() {
  return (
    <> <Groups />
        <Routes>
        <Route path="chatername" element={<Community />} />
                
            
        </Routes>
       

    </>
  )
}

export default ChatRout