import React from "react";
import styled from "styled-components";
import BackButten from "../../includes/back butten/BackButten";
import Dropdown from "../../includes/drop down/DropDown";
import Navbar from "../../includes/navbar/Navbar";
import Sidebar from "../../includes/navbar/Sidebar";
import Vidcard from "../../includes/vedio card/Vidcard";
function Acadamy() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AcadamyBanner></AcadamyBanner>
      <h1><BackButten/>Acadamy Name</h1>
      <AcadamyBio>Bio</AcadamyBio>
      <Dropdown />
      <Vidcard />
    </div>
  );
}
const AcadamyBanner = styled.div`
  padding: 10px;
  height: 190px;
  border: 5px solid white;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #cdedff;
  @media (max-width: 768px) {
    height: 120px;
  }
`;
const AcadamyBio = styled.div`
  padding: 10px;
  height: 190px;
  border: 5px solid white;
  border-radius: 20px;
  margin-top: 10px;
  text-align:center;
  background-color: #cdedff;
  @media (max-width: 768px) {
    height: 120px;
  }
`;

export default Acadamy;
