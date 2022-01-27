import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'
import Card from "react-bootstrap/Card";


export class Enterpreneurship extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services: [
            {
              id: "service1",
              title: "Covid 19 Predctor",
              description:
                "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
              src: "https://images.pexels.com/photos/5601140/pexels-photo-5601140.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            },
            {
              id: "service2",
              title: "Resource Sharing",
              description:
                "connect users seeking medical amenities to those willing to provide them",
              src: "https://images.pexels.com/photos/5601140/pexels-photo-5601140.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            },
            {
              id: "service3",
              title: "Global Statistics",
              description: "global stats and latest information about COVID-19",
              src: "https://images.pexels.com/photos/5601140/pexels-photo-5601140.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            },
            {
              id: "service4",
              title: "Resource Sharing",
              description:
                "connect users seeking medical amenities to those willing to provide them",
              src: "https://images.pexels.com/photos/5601140/pexels-photo-5601140.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            },
            {
              id: "service5",
              title: "Resource Sharing",
              description:
                "connect users seeking medical amenities to those willing to provide them",
              src: "https://images.pexels.com/photos/5601140/pexels-photo-5601140.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            },
          ]
        };
      }
  render() {
    return (  
        <Row xs={1} md={5} className="g-4 pt-4">
                  {this.state.services.map((item, key) => (
                    <Col>
                      <Card>
                        <Card.Img variant="top" src={item.src} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                
                </Row>
    );
  }
}

export default Enterpreneurship;
