import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import SearchField from "react-search-field";
import Button from "react-bootstrap/Button";

import { BiLogOut } from "react-icons/bi";

// sections of left column
import Navbar from "./Left_Column/Navbar";
import RecommnededRooms from "./Left_Column/Recommended_Rooms";
import RecommnededCreators from "./Left_Column/Recommended_Creators";

// sections of right column
import Enterpreneurship from "./Right_Column/Enterpreneurship";
import DataScience from "./Right_Column/DataScience";
import Finance from "./Right_Column/Finance";
import Software from "./Right_Column/Software";

export class Homepage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={10}>
            <SearchField placeholder="Search" classNames="test-class" />
          </Col>
          <Col md={2}>
            <Button href="#" type="button" value="Login">
              {" "}
              Login{" "}
            </Button>
            &emsp;
            <Button href="#" type="submit" value="Signup">
              {" "}
              Signup{" "}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={2} className="left-col">
          <div className="menu"><BiLogOut/></div>
            <Row>
            <Col><Navbar /> </Col>
              
            </Row>
            <Row>
              <RecommnededRooms />
            </Row>
            <Row>
              <RecommnededCreators />
            </Row>
          </Col>

          <Col md={10}>
            <Row>
              <DataScience />
            </Row>

            <Row>
              <Software />
            </Row>

            <Row>
              <Finance />
            </Row>

            <Row>
              <Enterpreneurship />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
