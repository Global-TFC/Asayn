import React from 'react'
import styled from 'styled-components'
import BackButten from '../../includes/back butten/BackButten'
import Card from 'react-bootstrap/Card'
import { Image, Container, Col, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import image from '../../../assets/costhamb.webp'
import { Link } from 'react-router-dom';

function Mycoursepage() {
  return (
    <>
      <BackButten />
      <CourseName>My class</CourseName>
      <Container fluid>
        <Row xs={1} md={3} lg={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col>
              <Link to="/coursenamehome">
                <Card>
                  <Card.Img variant="top" as={Image} src={image} alt="Card image" />
                  <Card.Body>
                    <Card.Title >Course Name</Card.Title>
                    <Card.Text>
                      Acadamy Name
                      <Card.Footer>
                        <ProgressBar animated now={85} />
                      </Card.Footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

const CourseName = styled.h1`
  padding-left: 10px;
  font-size: 30px;
  display: inline;
  @media (max-width: 768px) {
    font-size: 20px;
    
  }
`

export default Mycoursepage