import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";

export class Recommended_creators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: "service1",
          title: " Krish Naik",
          src: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "service2",
          title: " FreeCodeCamp",
          src: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "service3",
          title: " Joma Tech",
          src: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "service4",
          title: " Ken Jee",
          src: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "service5",
          title: " Start Quest",
          description:
            "Updated skills for data science based on",
          src: "https://images.pexels.com/photos/10003337/pexels-photo-10003337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h6 className="recommended-headings">Recommended Creators</h6>
        {this.state.services.map((item, key) => (
        <ListGroup>
          <ListGroup.Item>
          <Image roundedCircle fluid src={item.src} className="img-rec"></Image>
            {item.title}{" "}
            <Button className="rec_buttons" href="#" type="button" value="Join">
              {" "}
              Room{" "}
            </Button>
          </ListGroup.Item>         
          
        </ListGroup>
        ))}
        <details closed>
          <summary>Show more</summary>
          {this.state.services.map((item, key) => (
            <ListGroup>
              <ListGroup.Item>
                <Image
                  roundedCircle
                  fluid
                  src={item.src}
                  className="img-rec"
                ></Image>
                {item.title}{" "}
                <Button
                  className="rec_buttons"
                  href="#"
                  type="button"
                  value="Join"
                >
                  {" "}
                  Join{" "}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </details>
      </div>
    );
  }
}

export default Recommended_creators;
