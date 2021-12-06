import React from "react";
import { Row, Card, Col, Modal, Button, Image, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Editable from "../components/Editable/Editable.jsx";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";


import empty_book from "../../../assets/images/book.png";
import { MODAL_EDIT } from "../../../.store/modals/actions/constants.js";
import { create } from "lodash";

const ModalBook = ({
  closeModal,
  updateParam,
  save,
  create,
  
  data,
  data: {
    id,
    author,
    name,
    publisher,
    year,
    isbn,
    buy_date,
    language,
    pages,
    price,
    image,
    cover,
    category,
    rate,
    readed,
    ordered,
    handovered
  },
  status,
  open,
  loading,

  publishers,
  languages,
  categories,
  covers,
}) => {

  return !open ? null : (
    <>
      <Modal
        show={open} 
        onHide={closeModal}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="htext">{status === MODAL_EDIT ? "Редактирование книги" : "Создание книги"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="3" md="12">
              <Card className="p-3">
                <Image src={image || empty_book}/>
              </Card>
                <ReactStars
                  count={5}
                  onChange={(v)=>updateParam("rate",v)}
                  value={rate || 0}
                  size={42}
                  isHalf={true}
                  activeColor="#ffd700"
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  classNames="m-auto"
                />
              
              <div>
                <strong>Статус</strong><br/>
                {ordered ? "Заказан" : handovered ? "Отдано" : "В библиотеке"}
              </div>
              <div>
                <strong className="me-2">Прочитано</strong>
                <Form.Check 
                  type="checkbox"
                  className="d-inline"
                  value={readed}
                  onChange={({target:{checked}})=>updateParam("readed",checked)}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <Editable.Field
                  value={name}
                  head
                  placeholder="Введите название"
                  onChange={(v)=>updateParam("name",v)}
                />
              </Row>
              <Row>
                <Col>
                  <Editable.Field
                    value={author}
                    placeholder="Введите автора"
                    label="Автор"
                    onChange={(v)=>updateParam("author",v)}
                  />
                  <Editable.Select
                    value={category}
                    placeholder="Выберите жанр"
                    label="Жанр"
                    options={categories}
                    onChange={(v)=>updateParam("category",v)}
                  />
                  <Editable.Select
                    value={publisher}
                    placeholder="Выберите издательство"
                    label="Издательство"
                    options={publishers}
                    onChange={(v)=>updateParam("publisher",v)}
                  />
                  <Editable.Field
                    value={year}
                    placeholder="Введите год издания"
                    label="Год издания"
                    type="number"
                    onChange={(v)=>updateParam("year",v)}
                  />
                  <Editable.Field
                    value={pages}
                    placeholder="-"
                    label="Количество страниц"
                    type="number"
                    onChange={(v)=>updateParam("pages",v)}
                  />
                  <Editable.Select
                    value={cover}
                    placeholder="Выберите переплёт"
                    label="Переплёт"
                    options={covers}
                    onChange={(v)=>updateParam("cover",v)}
                  />
                </Col>
                <Col>
                  <Editable.Select
                    value={language}
                    placeholder="Выберите язык"
                    label="Язык"
                    options={languages}
                    onChange={(v)=>updateParam("language",v)}
                  />
                  <Editable.Field
                    value={buy_date}
                    placeholder="-"
                    label="Дата покупки"
                    type="date"
                    onChange={(v)=>updateParam("buy_date",v)}
                  />
                  <Editable.Field
                    value={price}
                    placeholder="0.00"
                    label="Цена"
                    type="number"
                    onChange={(v)=>updateParam("price",v)}
                  />
                  <Editable.Field
                    value={isbn}
                    placeholder="-"
                    label="ISBN"
                    onChange={(v)=>updateParam("isbn",v)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Отмена
          </Button>
          <Button variant="primary" onClick={() => {closeModal(); if (status == MODAL_EDIT) { save(data); } else { create(data) }; }}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(connector,dispatcher)(ModalBook);