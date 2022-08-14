import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./Navbar.css"
import "../../../theme/GlobalStyles"
import { Link } from 'react-router-dom';
import Groups from '../../firebase/Cloud Firestore/community/Groups';
import styled from 'styled-components';
import ChatMessage from '../../firebase/Cloud Firestore/community/ChatMessage';

function Sidebar() {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(true);
        setShow(true);
    }

    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to={"/"} className="nav__link active-link">
                        <i className='bx bxs-graduation nav__icon'></i><br />
                        <span className="nav__name">Home</span>
                    </Link>
                </li>

                <li class="nav__item">
                    <Link to={"/mycourse"} className="nav__link">
                        <i className='bx bx-slideshow nav__icon'></i><br />
                        <span className="nav__name">Class</span>
                    </Link>
                </li>

                <li className="nav__item">
                    {values.map((v, idx) => (
                        <Butten key={idx} className="nav__link" onClick={() => handleShow(v)}>
                            <i className='bx bx-chat nav__icon'></i><br />
                            <span className="nav__name">Chat</span>
                        </Butten>
                    ))}
                    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>asayn chat</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Groups/>
                        </Modal.Body>
                    </Modal>
                </li>

                <li className="nav__item">
                    <Link to={"/aboutme"} className="nav__link">
                        <i className='bx bxs-user nav__icon'></i><br />
                        <span className="nav__name">About</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const Butten = styled.button`
    box-sizing: none;
    border: none;
`

export default Sidebar;