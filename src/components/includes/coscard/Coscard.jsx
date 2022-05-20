import React from 'react'
import cardimg from './course.png'
import "./coscard.css"
import "../../../theme/GlobalStyles"

function Coscard() {
  return (
    <>
    <div className='homeset'>
      <div className='card'>
        <div className="cosimgdiv">
          <img src={cardimg} alt="themnile" />
        </div>
        <div className="cosditls">
          <h4>Course Name</h4>
          <span>Account</span>
          <span>Lesson</span>
        </div>
      </div>
      </div>
    </>
  )
}

export default Coscard;