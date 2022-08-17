import React, { useState } from "react";
import "./Navbar.css";
import "../../../theme/GlobalStyles";
import { Link } from "react-router-dom";
import Groups from "../../firebase/Cloud Firestore/community/Groups";
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to={"/"} className="nav__link active-link">
            <i className="bx bxs-graduation nav__icon"></i>
            <br />
            <span className="nav__name">Home</span>
          </Link>
        </li>

        <li class="nav__item">
          <Link to={"/mycourse"} className="nav__link">
            <i className="bx bx-slideshow nav__icon"></i>
            <br />
            <span className="nav__name">Class</span>
          </Link>
        </li>

        <li className="nav__item">
            <Butten
              className="nav__link"
              onClick={handleShow}
            >
              <i className="bx bx-chat nav__icon"></i>
              <br />
              <span className="nav__name">Chat</span>
            </Butten>
          
          <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Asayn Communities</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
         <Groups  />
        </Offcanvas.Body>
      </Offcanvas>
        </li>

        <li className="nav__item">
          <Link to={"/aboutme"} className="nav__link">
            <i className="bx bxs-user nav__icon"></i>
            <br />
            <span className="nav__name">About</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

const Butten = styled.button`
  box-sizing: none;
  border: none;
`;

export default Sidebar;
