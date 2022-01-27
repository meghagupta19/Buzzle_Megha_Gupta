import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import SearchField from "react-search-field";
import Button from "react-bootstrap/Button";
import { BiLogOut } from "react-icons/bi";


import Sidebar from "./Left_Column/Sidebar";

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
          <Col lg={10} md={5} xs={6}>
            <SearchField placeholder="Search" classNames="test-class" />
          </Col>
          <Col lg={2} md={5} xs={4} className="columne-xs">
            <Button href="#" type="button" value="Login">
              {" "}
              Login{" "}
            </Button>
            &emsp;
            <Button href="#" type="submit" value="Signup" className="loginbtn">
              {" "}
              Signup{" "}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col
            md={2}
            className="left-col"
          >
            <div className="menu" expand="md" onClick={this.closeClick} id="close"> <BiLogOut />  </div>
            <Sidebar />
          </Col>

          <Col md={10} >
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
