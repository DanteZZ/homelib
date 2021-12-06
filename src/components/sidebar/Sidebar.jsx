import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faBook, faTheaterMasks, faNewspaper, faBookOpen, faLanguage } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from 'react-router-dom';

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js"

const Sidebar = () => {
  const location = useLocation();

  const navs = [
    {to:"/",title:"Библиотека", icon: faBook},
    {to:"/categories",title:"Жанры", icon: faTheaterMasks},
    {to:"/publishers",title:"Издатели", icon: faNewspaper},
    {to:"/covers",title:"Переплёты", icon: faBookOpen},
    {to:"/languages",title:"Языки", icon: faLanguage},
  ]
  return (
    <div id="sidebar" style={{width: "100px"}} className="pt-3">
      <Nav activeKey={location.pathname} className="flex-column">
        {
          navs.map((i,k)=>
            <Nav.Link key={k} as={Link} eventKey={i.to} to={i.to} className="p-0 pb-3">
              <div className="sidebar-item">
                <Fa icon={i.icon} size="2x" /><br/>
                <small>{i.title}</small>
              </div>
            </Nav.Link>
          )
        }
      </Nav>
    </div>
  );
};
export default connect(connector,dispatcher)(Sidebar);
