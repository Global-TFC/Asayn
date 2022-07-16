
import React from 'react'
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"

function Navbar() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span class="dropdown">
                            <button class="dropbtn"><i class='bx bxs-user nav__icon topnavlist' ></i><i class='bx bxs-chevron-down nav__icon'></i></button>
                            <div class="dropdown-content">
                                <NavLink to="/user">Login</NavLink>
                                <NavLink to="/user">Sign Up</NavLink>
                            </div>
                        </span>
                        <Link to="#"><i class='bx bxs-bell-ring  nav__icon topnavlist'></i></Link>
                        <Link to="#"><i class='bx bxs-chat bx-tada nav__icon topnavlist' ></i></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar