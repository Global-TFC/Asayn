import React from "react";
import Card from 'react-bootstrap/Card'
import { Image, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import image from '../../../assets/costhamb.webp'
import styled from "styled-components";
import OffCanvasExample from "./cource create page/Create";


function TCource() {
  return (
    <>
      <Cource>
        <Title>Cources</Title>
        {["bottom"].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </Cource>
      <br />
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
    </>
  );
}

const Cource = styled.div`
  width: 95%;
  height: 60px;
  background-color: #f3f3f3;
  border-radius: 20px;
  top: 90px;
`;
const Title = styled.span`
  font-size: 20px;
  padding-left: 10px;
`;


export default TCource;
