import React from 'react'
import Card from 'react-bootstrap/Card'
import { Image, Container } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";
import image from './vediothamb.jpg'

function Vidcard() {
  return (
    <Container fluid>
    <Row xs={1} md={3} lg={4} className="g-4">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" as={Image} src={image}  alt="Card image" />
        <Card.Body>
          <Card.Title >Vedio title</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>
  )
}

export default Vidcard