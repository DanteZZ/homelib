import React, { useMemo } from "react";
import { Row, Card, Col } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import empty_book from "../../../assets/images/book.png";
const Library = ({ openBook, createBook, books }) => {
  const sortedBooks = useMemo(() => books.sort((a, b) => b.id - a.id), [books]);

  return (
    <>
      <h3 className="htext p-0 pt-3">Моя библиотека</h3>
      <Row className="">

        <Col xl={2} lg={4} md={4} xs={6} sm={6} >
          <Card className="book-card-add" onClick={()=>createBook()}>
            <Card.Body>
              <Fa icon={faPlusCircle} size="2x" />
              Добавить книгу
            </Card.Body>
          </Card>
        </Col>

        {sortedBooks.map((book) => (
          <Col key={book.id} xl={2} lg={4} md={4} xs={6} sm={6} >
            <Card className="pt-3 book-card" onClick={() => openBook(book)}>
              <Card.Img
                variant="top"
                src={book.image || empty_book}
                className="library-book-img"
              />
              <Card.Body>
                <Card.Title className="h6">{book.name || "Без названия"}</Card.Title>
                <Card.Text>
                  <small>{book.author || "Автор не указан"}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default connect(connector, dispatcher)(Library);
