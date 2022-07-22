import React from 'react'
import { Container, Image, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import image from "../../../assets/sprofile.webp"
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function About() {
    return (
        <>
            <Container fluid>
                <Row xs={1} md={2} lg={3} className="g-4 p-3" >
                    <AlignCenter className='text-center'>
                        <Image roundedCircle  src={image} />
                    </AlignCenter>
                    <Form.Group className="mb-3" >
                        <Form.Label className='pt-3'>Full Name</Form.Label>
                        <Form.Control placeholder="Person Name" disabled />
                        <Form.Label>Mail</Form.Label>
                        <Form.Control placeholder="example@mail.com" disabled />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control placeholder="9876543210" disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Complited Course</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup as="ol" numbered>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Learning Course</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup as="ol" numbered>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                    <ListGroup.Item as="li">Course Name</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </>
    )
}

const AlignCenter = styled.div`
    padding: 10px;
    align-content: center;
    border-radius: 50;
    
`

export default About