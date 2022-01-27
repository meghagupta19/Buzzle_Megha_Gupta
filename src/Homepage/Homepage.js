import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Enterpreneurship from "./Enterpreneurship";
import DataScience from "./DataScience";
import Finance from "./Finance";
import Software from "./Software";

export class Homepage extends Component {
  
  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col md={2}>gjhvfj</Col>
              <Col md={10}>
              <Row>
                    <DataScience/>
                </Row>

                <Row>
                    <Software/>
                </Row>
                <Row>
                    <Finance/>
                </Row>
                <Row>
                    <Enterpreneurship/>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Homepage;
