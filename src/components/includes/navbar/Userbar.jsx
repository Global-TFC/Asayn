import React, { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom'
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import PopUp from '../signup/popup/PopUp';

import SignUp from '../signup/Student-SignUp/SignUp';
import TSignUp from '../signup/Teacher-SignUp/SignUp';
import SignIn from '../signin/Student-SignIn/SignIn';
import TSignIn from '../signin/Teacher-SignIn/SignIn';

function Userbar() {
    const [show, setShow] = useState(false);

    const shandleClose = () => setShow(false);
    const shandleShow = () => setShow(true);

    const [showt, setShowt] = useState(false);

    const thandleClose = () => setShowt(false);
    const thandleShow = () => setShowt(true);
    return (
        <>
            <header className="header" id="header">
                <nav className="nav ">
                    <Link to={"/"} className="nav__logo">Asayn</Link>
                    <div className="notti_links " >
                        <span className="dropdown">
                            <button className="dropbtn user-drop"><i className='bx bxs-user nav__icon topnavlist' ></i><i class='bx bxs-chevron-down nav__icon'></i></button>
                            <DropDB className="dropdown-content ">
                                <Navlist onClick={shandleShow} > Student</Navlist>
                                <br />
                                <Navlist onClick={thandleShow} > Creater</Navlist>
                            </DropDB>
                            <Modal className='accoundselect' size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered show={show} onHide={shandleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Student Account</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Tabs
                                        defaultActiveKey="signin"
                                        id="justify-tab-example"
                                        className="mb-3"
                                        justify
                                    >
                                        <Tab eventKey="signin" title="sign in">
                                            <SignIn />
                                        </Tab>
                                        <Tab eventKey="register" title="register">
                                            <SignUp />
                                        </Tab>
                                    </Tabs>
                                </Modal.Body>
                            </Modal>
                            <Modal className='accoundselect' size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered show={showt} onHide={thandleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Creater Account</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Tabs
                                        defaultActiveKey="signin"
                                        id="justify-tab-example"
                                        className="mb-3"
                                        justify
                                    >
                                        <Tab eventKey="signin" title="sign in">
                                            <TSignIn />
                                        </Tab>
                                        <Tab eventKey="register" title="register">
                                            <TSignUp />
                                        </Tab>
                                    </Tabs>
                                </Modal.Body>
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