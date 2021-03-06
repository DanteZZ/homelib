import React, { useEffect } from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";
import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

import Library from "../pages/library/Library.jsx";
import Categories from "../pages/categories/Categories.jsx";
import Covers from "../pages/covers/Covers.jsx";
import Publishers from "../pages/publishers/Publishers.jsx";
import Languages from "../pages/languages/Languages.jsx";

import Auth from "../pages/auth/Auth.jsx";

import ModalBook from "../modals/book/ModalBook.jsx";
import ModalCategory from "../modals/category/ModalCategory.jsx";
import ModalCover from "../modals/cover/ModalCover.jsx";
import ModalPublisher from "../modals/publisher/ModalPublisher.jsx";
import ModalLanguage from "../modals/language/ModalLanguage.jsx";

import ModalExternal from "../modals/external/ModalExternal.jsx";

const Main = ({ isAuth, isLoaded, checkIsAuth }) => {
  useEffect(() => {
    checkIsAuth();
  }, []);

  return isAuth ? (
    <>
      <Header />
      <Container fluid>
        <Row className="mt-5 pt-2" style={{ marginBottom: "6px" }} />
        <Row>
          <Sidebar />
          <Col>
            <div className="p-3 pt-0">
              <Routes>
                <Route exact path="/" element={<Library />} />
                <Route exact path="/unhaul" element={
                  <Library
                    unhaul
                    customHead="Unhaul"
                    useFilter={false}
                  />
                } />
                <Route exact path="/categories" element={<Categories />} />
                <Route exact path="/covers" element={<Covers />} />
                <Route exact path="/publishers" element={<Publishers />} />
                <Route exact path="/languages" element={<Languages />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>

      <ModalBook />
      <ModalCategory />
      <ModalCover />
      <ModalPublisher />
      <ModalLanguage />
      <ModalExternal />
    </>
  ) : (
    <>
      <Container
        className="d-flex vh-100 align-items-center justify-content-center bg-auth"
        fluid
      >
        {isLoaded ? <Auth /> : <Spinner animation="border" variant="warning" />}
      </Container>
    </>
  );
};

export default connect(connector, dispatcher)(Main);
