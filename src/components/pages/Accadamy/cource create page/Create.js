import React, { useState } from "react";
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Create.css'

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <CreateBtn variant="primary" onClick={handleShow} className="me-2">
        Create
      </CreateBtn>
      <Offcanvas className='canvabody' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Cource</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col md={6} sm={12}  >
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Course Name
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col md={6} sm={12}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  Course Id
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Category</option>
                <option value="1">Coding</option>
                <option value="2">School</option>
                <option value="3">Degree</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Language</option>
                <option value="1">English</option>
                <option value="2">Malayalam</option>
                <option value="3">Tamil</option>
                <option value="4">Tamil</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col md={8} sm={12}>
            <InputGroup className="pt-3">
              <FloatingLabel controlId="floatingTextarea2" label="About Course">
                <Form.Control
                  as="textarea"
                  placeholder="about your course"
                  style={{ minHeight: '200px', width: '100%' }}
                />
              </FloatingLabel>
            </InputGroup>
            </Col>
          </Row>
          <Form.Check inline label="free" name="group" type="radio" />
          <Form.Check inline label="paid" name="group" type="radio" />
          <CreateC>Create Cource</CreateC>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const CreateBtn = styled.button`
border-radius: 15px;
padding: 10px 30px;
margin-top: 8px;
margin-right: 40px;
float: right;
background-color: #4183f5;
color: white;
font-weight: 700;
border: none;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }
`
const CreateC = styled.button`
border-radius: 15px;
padding: 5px 15px;
margin-top: 10px;
margin-left: 20px;
background-color: #4183f5;
color: white;
font-weight: 700;
border: none;
`

export default OffCanvasExample;
