import React, { Component } from "react";
import { Row } from "react-bootstrap";


// sections of left column
import Navbar from "./Navbar";
import RecommnededRooms from "./Recommended_Rooms";
import RecommnededCreators from "./Recommended_Creators";

export default class Example extends Component {
 
  render() {
    return (
      <div>
          <Row>
            <Navbar />
          </Row>

          <Row>
            <RecommnededRooms />
          </Row>

          <Row>
            <RecommnededCreators />
          </Row>
        
      </div>
    );
  }
}


