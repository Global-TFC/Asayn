import React from "react";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import Card from "../../includes/coscard/Card";

function TCource() {
  return (
    <>
    <Cource>
      <Title>Cources</Title>
      <CreateBtn>Create</CreateBtn>  
    </Cource>
    <br />
    <Card/>
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
const CreateBtn = styled.button`
border-radius: 15px;
padding: 10px 30px;
margin-top: 8px;
margin-right: 40px;
float: right;
background-color: #4183f5;
color: white;
font-weight: 700;
border: none;
}
  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export default TCource;
