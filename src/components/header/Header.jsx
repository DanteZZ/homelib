import React from "react";
import { Navbar, Button, NavDropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/logo.svg";
import empty_avatar from "../../assets/images/user.png"

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js"

const Header = ({
  logout,
  
  user: {
    name,
    avatar
  }
}) => {

  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Navbar.Brand className="logo">
        <img
          src={logo}
          className="d-inline-block align-top logo__image"
          alt="React Bootstrap logo"
        />
        HomeLib
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Image src={avatar || empty_avatar} className="avatar" roundedCircle />
        <NavDropdown title={name}>
          <NavDropdown.Item onClick={logout}>Выйти</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default connect(connector,dispatcher)(Header);
