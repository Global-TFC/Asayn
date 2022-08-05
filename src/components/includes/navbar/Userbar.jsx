import React, { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PopUp from '../signup/popup/PopUp';

function Userbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span className="dropdown">
                            <button className="dropbtn"><i className='bx bxs-user nav__icon topnavlist' ></i><i class='bx bxs-chevron-down nav__icon'></i></button>
                            <DropDB className="dropdown-content">
                                <Navlist onClick={handleShow} ><i class='bx bx-log-in'></i> Login</Navlist>
                                <br />
                                <Navlist onClick={handleShow} ><i class='bx bx-log-in-circle'></i> Sign Up</Navlist>
                            </DropDB>
                            <Modal className='accoundselect' size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Account</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* popup her */}
                                    <PopUp />
                                </Modal.Body>
                                <Modal.Footer>
                                    {/* <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button> */}
                                </Modal.Footer>
                            </Modal>
                        </span>
                    </div>
                </nav>
            </header>
        </>
    )
}

const DropDB = styled.div`
    border-radius: 10px;
`
const Navlist = styled.span`
    line-height: 40px;
    color: #0077ff;
    cursor: pointer;
`
export default Userbar