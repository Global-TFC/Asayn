import React from "react";
import "./PopUp.css";
import Teacher from "./teacher.png";
import Student from "./student.png";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
function PopUp() {

  return (
    <>
      <Row>
        <div className="body">
          <h3>sign with a </h3>
        </div>
        <Col md="6">
          {/* /tregister */}
          <Link to="tlogin">
            <Selections >
              <i class='bx bxs-video-plus ifont'></i><br />
              <span className="sfont">Creater</span>
            </Selections>
          </Link>
        </Col>
        <Col md="6">
          {/* /register */}
          <Link to="login">
            <Selections  >
              <i class='bx bx-slideshow ifont'></i><br />
              <span className="sfont">Student</span>
            </Selections>
          </Link>
        </Col>
      </Row>

    </>
  );
}

const Selections = styled.div`
  padding: 40px 10px;
  text-align: center;
  background-color: #ffffff;
  font-size: 1.5rem;
  border-radius: 20px;
  box-shadow: rgba(80, 80, 80, 0.591) 5px 10px 15px;
  @media (max-width: 768px) {
    padding: 20px 15px;
    margin-top: 10px;
  }
`

export default PopUp;