import React, { useState } from "react";
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CreateBtn variant="primary" onClick={handleShow} className="me-2">
        Create
      </CreateBtn>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Cource</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Form.Check inline label="free" name="group" type="radio" />
          <Form.Check inline label="paid" name="group" type="radio" />
          <Form.Select aria-label="Default select example">
            <option>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Language</option>
            <option value="1">English</option>
            <option value="2">Malayalam</option>
            <option value="3">Tamil</option>
          </Form.Select>
          <FloatingLabel controlId="floatingTextarea2" label="description">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
        </FloatingLabel>
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
}
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export default OffCanvasExample;
