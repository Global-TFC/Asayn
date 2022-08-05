
import React,{useState} from 'react'
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';


function Navbar() {

    const [show, setShow] = useState(false);
    const [showMassage, setShowMassage] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleShowMassage = () => setShowMassage(!showMassage);

    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span className="dropdown">
                            <button className="dropbtn"><i className='bx bxs-user nav__icon topnavlist' ></i><i class='bx bxs-chevron-down nav__icon'></i></button>
                            <BorderRadios className="dropdown-content">
                                <NavLink to="/user">Login</NavLink>
                                <NavLink to="/user">Sign Up</NavLink>
                            </BorderRadios>
                        </span>
                        <Link to="#"><i className='bx bxs-bell-ring  nav__icon topnavlist'></i></Link>
                        <Link to="#"><i className='bx bxs-chat bx-tada nav__icon topnavlist' onClick={handleShow} ></i></Link>
                    </div>
                </nav>
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Chat Notification</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Row>
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <Col md={12} className="mb-2">
                                    {/* <Button onClick={toggleShowMassage} className="mb-2">
                                    Toggle Toast <strong>with</strong> Animation
                                </Button> */}
                                    <Toast show={showMassage} onClose={toggleShowMassage}>
                                        <Toast.Header>
                                            <img
                                                src="holder.js/20x20?text=%20"
                                                className="rounded me-2"
                                                alt=""
                                            />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                                    </Toast>
                                </Col>
                            ))}
                        </Row>
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}

const BorderRadios =styled.div`
    border-radius: 10px;
`
export default Navbar