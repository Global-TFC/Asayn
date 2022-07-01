import React from "react";
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";



function CosCard() {
  return (
    <div >
      <Link  to="Enroll">
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
      </Link>
    </div>
  );
}

export default CosCard;
