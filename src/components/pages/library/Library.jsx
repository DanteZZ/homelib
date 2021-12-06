import React, { useMemo } from "react";
import { Row, Card, Col } from "react-bootstrap";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import empty_book from "../../../assets/images/book.png";
const Library = ({ openBook, books }) => {
  const sortedBooks = useMemo(() => books.sort((a, b) => b.id - a.id), [books]);

  return (
    <>
      <h3 className="htext p-0 pt-3">Моя библиотека</h3>
      <Row className="">
        {sortedBooks.map((book) => (
          <Col key={book.id} lg={2} xs={6} sm={6} md={4}>
            <Card className="pt-3 book-card" onClick={() => openBook(book)}>
              <Card.Img
                variant="top"
                src={book.image || empty_book}
                className="library-book-img"
              />
              <Card.Body>
                <Card.Title>{book.name || "Без названия"}</Card.Title>
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
