import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './Chat.css'

function Groups() {
  return (

    <div className="modalBackground ">
      <div className="modalContainer boxsize">
        <Container fluid>
          <Row>
          <Link to="chatername">
            <Col className="chattabsize">
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
            </Link>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Groups;
