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
            {Array.from({ length: 4 }).map((_, idx) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start list-item"
              >
                <div class="d-flex align-items-start">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="rounded-circle mr-1 avathar" alt="Vanessa Tucker" width="40" height="40"/>
                    <div class="flex-grow-1 ml-3">
                    Team Asayn
                      <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                    </div>
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            ))}
          </Col>
          <Offcanvas className="offcanva" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
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
