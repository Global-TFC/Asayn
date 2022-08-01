import React, { useState } from 'react'
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import Offcanvas from 'react-bootstrap/Offcanvas';


function CrNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/creater"} className="nav__logo">Asayn</Link>
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
                            </div>
                        </span>

                        <Link to="#" ><i className='bx bxs-chat bx-tada nav__icon topnavlist' onClick={handleShow} ></i></Link>
                    </div>
                </nav>
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        I will not close if you click outside of me.
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}

export default CrNavbar