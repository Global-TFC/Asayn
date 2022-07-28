import React from "react";
import styled from "styled-components";
import Card from "../../includes/coscard/Card";
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
      <Card />
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
