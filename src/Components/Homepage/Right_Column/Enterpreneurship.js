import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import { FiClock} from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

export class Enterpreneurship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: "service1",
          title: "  kevin",
          duration: "01:20:00",
          count: "1k",
          description:
            "Updated skills for data science based on",
          src: "https://images.pexels.com/photos/10005736/pexels-photo-10005736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          profile: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "service2",
          title: "Resource Sharing",
          duration: "01:20:00",
          count: "1k",
          description:
            "Updated skills for data science based on",
          src: "https://images.pexels.com/photos/10005736/pexels-photo-10005736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          profile: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "service3",
          title: "Global Statistics",
          count: "1k",
          duration: "01:20:00",
          description: "global stats and latest information about",
          src: "https://images.pexels.com/photos/10005736/pexels-photo-10005736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          profile: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "service4",
          title: "Resource Sharing",
          duration: "01:20:00",
          count: "1k",
          description:
            "Updated skills for data science based on",
          src: "https://images.pexels.com/photos/10005736/pexels-photo-10005736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          profile: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: "service5",
          title: "Resource Sharing",
          duration: "01:20:00",
          count: "1k",
          description:
            "Updated skills for data science based on",
          src: "https://images.pexels.com/photos/10005736/pexels-photo-10005736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          profile: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h5 className="row-heading">
          TOP <span className="head-span"> LIVE EVENTS</span> FROM <span className="head-span heading-section">ENTERPRENEURSHIP</span> WORLD
        </h5>
        <Row xs={1} md={5} className="g-4 pt-4">
          {this.state.services.map((item, key) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={item.src} />
                <Badge className="badge-1" bg="danger">Live</Badge> 
                <Image roundedCircle fluid src={item.profile} className="img-card"></Image>
                <Badge className="badge-2" bg="secondary">{item.count} Viewers</Badge>
                <Card.Body>
                <Card.Title>
                {item.description} <div className="dots"><BsThreeDotsVertical/></div>
                  </Card.Title>
                  <Card.Text>{item.title} <p><FiClock/> {item.duration}</p></Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Enterpreneurship;
