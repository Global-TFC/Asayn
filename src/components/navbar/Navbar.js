import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="##" className="nav__logo">knolsort</a>
                    <div className="nav__link" >
                        <i className='bx bx-message-square-detail nav__icon'></i>
                        <i className='bx bx-message-square-detail nav__icon'></i>
                        <i className='bx bx-message-square-detail nav__icon'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar