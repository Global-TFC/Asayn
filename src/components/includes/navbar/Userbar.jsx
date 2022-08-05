import React from 'react'
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import styled from 'styled-components'

function Userbar() {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span className="dropdown">
                            <button className="dropbtn"><i className='bx bxs-user nav__icon topnavlist' ></i><i class='bx bxs-chevron-down nav__icon'></i></button>
                            <DropDB className="dropdown-content">
                                <NavLink to="/user"><i class='bx bx-log-in'></i> Login</NavLink>
                                <NavLink to="/user"><i class='bx bx-log-in-circle'></i> Sign Up</NavLink>
                            </DropDB>
                        </span>
                        <Link to="#"><i className='bx bxs-bell-ring  nav__icon topnavlist'></i></Link>
                        <Link to="#"><i className='bx bxs-chat bx-tada nav__icon topnavlist' ></i></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

const DropDB = styled.div`
    border-radius: 10px;
    
`
export default Userbar