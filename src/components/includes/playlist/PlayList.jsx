import React, { useState } from 'react';
import styled from 'styled-components';

const Playlist = () => {
  const [show, setShow] = useState(true);
  return(
    <>
      <ListButten onClick={() => setShow(prev => !prev)}>
        <CourseIcon src="https://images.unsplash.com/photo-1622322062536-895d869b09ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="distressed Italian wall in pink and grey hues"/>
        <CourseName>Course name</CourseName>
        <DropIcon><i class='bx bxs-chevron-down'></i></DropIcon>
      </ListButten>
      {show && <PlayList>This is your component</PlayList>}
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


export default Playlist
