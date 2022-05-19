import React, { useMemo } from "react";
import { ListGroup, Badge, Row, Col, Card } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import empty_book from "../../../assets/images/book.png";

const Publishers = ({ openPublisher, createPublisher, publishers, books }) => {
  const sortedPublishers = useMemo(() => {
    const publCounts = books.reduce((total, i) => {
      if (i.publisher) {
        return { ...total, [i.publisher]: total?.[i.publisher] + 1 || 1 };
      }
      return total;
    }, {});
    return publishers
      .map((i) => {
        return { ...i, count: publCounts?.[i.id] || 0 };
      })
      .sort((a, b) => b.id - a.id);
  }, [publishers, books]);

  return (
    <>
      <h3 className="htext p-0 pt-3">Список издательств</h3>
      <Row className="">
        <Col xl={2} lg={4} md={4} xs={6} sm={6}>
          <Card className="book-card-add" onClick={() => createPublisher()}>
            <Card.Body>
              <Fa icon={faPlusCircle} size="2x" />
              Добавить издателя
            </Card.Body>
          </Card>
        </Col>

        {sortedPublishers.map((item) => (
          <Col key={item.id} xl={2} lg={4} md={4} xs={6} sm={6}>
            <Card
              className="pt-3 book-card"
              onClick={() => openPublisher(item)}
            >
              <Card.Img
                variant="top"
                src={item.image || empty_book}
                className="library-book-img"
              />
              <Card.Body>
                <Card.Title className="h6 text-center">
                  {item.name || "Без названия"}
                </Card.Title>
                <Card.Text className="text-end">
                  <Badge>{item.count || 0} книг</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default connect(connector, dispatcher)(Publishers);
