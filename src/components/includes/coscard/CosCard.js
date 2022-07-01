import React from "react";
import {Card , Button } from 'react-bootstrap'



function CosCard() {
  return (
    <div  >
      <Card style={{ width: "18rem" , float:"left"  , margin:"5px" }}>
        <Card.Img variant="top" src="https://img.youtube.com/vi/jSWwKABiFik/maxresdefault.jpg" />
        <Card.Body>
          <Card.Title>Card Title.....</Card.Title>
          <Card.Text>
            Acadamy Name
            <Card.Footer>
            19999 Enrolled 
            </Card.Footer>
          </Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default CosCard;
