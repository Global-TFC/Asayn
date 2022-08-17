import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./Chat.css";
import Chat from "./Chat";
import Offcanvas from "react-bootstrap/Offcanvas";

function Groups() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="chattabsize" onClick={handleShow}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            ))}
          </Col>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Asayn Chat</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Chat />
            </Offcanvas.Body>
          </Offcanvas>
        </Row>
      </Container>
    </>
  );
}

export default Groups;
