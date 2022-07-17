import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";


const Playlist = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <ListButten onClick={() => setShow(prev => !prev)}>
        <CourseIcon src="https://images.unsplash.com/photo-1622322062536-895d869b09ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="distressed Italian wall in pink and grey hues" />
        <CourseName>Course name</CourseName>
        <DropIcon><i class='bx bxs-chevron-down'></i></DropIcon>
      </ListButten>
      {show &&
        <PlayList>
          <div >
            <Container fluid>
            <ListHeight>
              <Row xs={1} md={3} lg={1} className="g-1">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <Col>
                    <Background>
                      <tr className='p-1  shadow-1-strong text-dark'>
                        <td className=' p-3 '>1</td>
                        <td className='w-25 bg-dark text-light' >photo</td>
                        <td className='w-70 p-3'>Otto kb jhn ojino ijoi jo ino noi n</td>
                      </tr>
                    </Background>
                  </Col>
                ))}
              </Row>
              </ListHeight>
            </Container>
          </div>
        </PlayList>
      }
    </>
  );
}

const PlayList = styled.div`
    
`
const ListButten = styled.div`
    width: 95%;
    border:1px solid black;
    border-radius:20px 20px 0 0;
    height:60px;
    padding:8px 12px;
    display: table;
    margin: 0 auto;
    cursor: pointer;
`

const CourseIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const CourseName = styled.span`
    font-size: 20px;
    padding-left:8px;
`
const DropIcon = styled.span``

const Background = styled.div`
  background-color:#e3e3e3;
`

const ListHeight = styled.div`
  height:62vh;
  background-color: #fed9ff;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  padding: 20px;
`

export default Playlist
