import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js"
import {
  Routes,
  Route
} from "react-router-dom";

import Header from "../header/Header.jsx";
import Library from "../pages/library/Library.jsx";
import Auth from "../pages/auth/Auth.jsx";
import ModalBook from "../modals/book/ModalBook.jsx";

const Main = ({
  isAuth,
  isLoaded,
  checkIsAuth
}) => {
    useEffect(() => {
      checkIsAuth()
    }, []);
    
    return isAuth ? 
      <>
        <Header />
        <Container fluid>
          <Row className="mt-5 pt-4" />
          <div className="p-3 pt-0">
            <Routes>
              <Route exact path="/" element={<Library/>}/>
            </Routes>
          </div>
          
        </Container>
        <ModalBook/>
      </>
    :
      <>
        <Container className="d-flex vh-100 align-items-center justify-content-center bg-auth" fluid>
          {
            isLoaded ? 
              <Auth/>
            : 
              <Spinner animation="border" variant="warning" />
          }
          
        </Container>
      </>
};

export default connect(connector,dispatcher)(Main);