
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"

function Navbar() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links" >
                        <i className='bx bx-home nav__icon'></i>
                        <i className='bx bx-message-square-detail nav__icon'></i>
                        <i className='bx bx-bell nav__icon'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar