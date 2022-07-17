import React from "react";
import Card from 'react-bootstrap/Card'
import { Image, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import image from './costhamb.webp'
import { Link } from "react-router-dom";



function CosCard() {
  return (
    <div >
      <Link to="Enroll">
        <Container fluid>
          <Row xs={1} md={3} lg={4} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" as={Image} src={image} alt="Card image" />
                  <Card.Body>
                    <Card.Title >Course Name</Card.Title>
                    <Card.Text>
                      Acadamy Name
                      <Card.Footer>
                        100+ Enrolled
                      </Card.Footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Link>
    </div>
  );
}

export default CosCard;
