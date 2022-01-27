import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import { FaHome,FaGlobe} from "react-icons/fa";
import { MdPlaylistAdd} from "react-icons/md";
import {IoPeopleCircleOutline} from "react-icons/io5";

export class Navbar extends Component {
  render() {
    return <div>        
        <Nav defaultActiveKey="/home" className="flex-column align-items-start">
                    <Nav.Link href="/"> <FaHome/> Home</Nav.Link>
                    <Nav.Link eventKey="link-1" href="/"><FaGlobe/> Cultures</Nav.Link>
                    <Nav.Link eventKey="link-2" href="/"><IoPeopleCircleOutline/> Rooms</Nav.Link>
                    <Nav.Link eventKey="disabled" href="/"><MdPlaylistAdd/> Playlist</Nav.Link>
                  </Nav>
    </div>;
  }
}

export default Navbar;
