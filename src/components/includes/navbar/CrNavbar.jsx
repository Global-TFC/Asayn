import React from 'react'
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"

function CrNavbar() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span className="dropdown">
                            <button className="dropbtn"><i className='bx bxs-user nav__icon topnavlist' ></i><i className='bx bxs-chevron-down nav__icon'></i></button>
                            <div className="dropdown-content">
                                <NavLink to="/user">Login</NavLink>
                                <NavLink to="/user">Sign Up</NavLink>
                            </div>
                        </span>
                        <span className="dropdown">
                            <button className="dropbtn"><i className='bx bx-message-square-add nav__icon topnavlist'></i></button>
                            <div className="dropdown-content">
                                <NavLink to=""><i className='bx bxs-video-plus nav__icon topnavlist' ></i>create video</NavLink>
                                <NavLink to="/user">Sign Up</NavLink>
                            </div>
                        </span>
                        <Link to="#"><i className='bx bxs-chat bx-tada nav__icon topnavlist' ></i></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default CrNavbar