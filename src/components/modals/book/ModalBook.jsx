import React, { useMemo } from "react";
import { Row, Image, Col, Modal, Button, Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Editable from "../components/Editable/Editable.jsx";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import flags from "../../../.common/country.json";

import { MODAL_EDIT } from "../../../.store/modals/actions/constants.js";

const ModalBook = ({
  closeModal,
  updateParam,
  save,
  create,
  remove,

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
    handovered,
    serie,
    read_date
  },
  status,
  open,
  loading,

  publishers,
  languages,
  categories,
  covers,
}) => {
  const flagsById = useMemo(() => {
    const res = {};
    for (let k in flags) {
      const f = flags[k];
      res[f.id] = f;
    }
    return res;
  }, [flags]);

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
          <Modal.Title className="htext">
            {status === MODAL_EDIT ? "Редактирование книги" : "Создание книги"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="3" md="12">
              <Editable.Image
                value={image}
                onChange={(v) => updateParam("image", v)}
              />
              <ReactStars
                count={5}
                onChange={(v) => updateParam("rate", v)}
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
                <strong>Статус</strong>
                <br />
                {ordered ? "Заказан" : handovered ? "Отдано" : "В библиотеке"}
              </div>
              <div>
                <strong className="me-2">Прочитано</strong>
                <Form.Check
                  type="checkbox"
                  className="d-inline"
                  checked={readed}
                  onChange={({ target: { checked } }) =>
                    updateParam("readed", checked)
                  }
                />
                {readed && 
                  <Editable.Field
                    value={read_date}
                    placeholder="-"
                    placeholder="Укажите дату прочтения"
                    type="date"
                    onChange={(v) => updateParam("read_date", v)}
                  />
                }
              </div>
            </Col>
            <Col>
              <Row>
                <Editable.Field
                  value={name}
                  head
                  placeholder="Введите название"
                  onChange={(v) => updateParam("name", v)}
                />
              </Row>
              <Row>
                <Col>
                  <Editable.Field
                    value={author}
                    placeholder="Введите автора"
                    label="Автор"
                    onChange={(v) => updateParam("author", v)}
                  />
                  <Editable.NestedSelect
                    value={category}
                    placeholder="Выберите жанр"
                    label="Жанр"
                    options={categories}
                    onChange={(v) => updateParam("category", v)}
                  />
                  <Editable.Select
                    value={publisher}
                    placeholder="Выберите издательство"
                    label="Издательство"
                    options={publishers}
                    onChange={(v) => updateParam("publisher", v)}
                    optionWrapper={(i) => (
                      <>
                        {i?.image && (
                          <Image src={i?.image} style={{ height: "18px" }} />
                        )}{" "}
                        {i?.name}
                      </>
                    )}
                  />
                  <Editable.Field
                    value={year}
                    placeholder="Введите год издания"
                    label="Год издания"
                    type="number"
                    onChange={(v) => updateParam("year", v)}
                  />
                  <Editable.Field
                    value={pages}
                    placeholder="-"
                    label="Количество страниц"
                    type="number"
                    onChange={(v) => updateParam("pages", v)}
                  />
                  <Editable.Select
                    value={cover}
                    placeholder="Выберите переплёт"
                    label="Переплёт"
                    options={covers}
                    onChange={(v) => updateParam("cover", v)}
                  />
                </Col>
                <Col>
                  <Editable.Field
                    value={serie}
                    placeholder="-"
                    label="Серия"
                    onChange={(v) => updateParam("serie", v)}
                  />
                  <Editable.Select
                    value={language}
                    placeholder="Выберите язык"
                    label="Язык"
                    options={languages}
                    onChange={(v) => updateParam("language", v)}
                    optionWrapper={(i) => (
                      <>
                        <Image
                          src={flagsById?.[i?.icon].flag}
                          style={{ width: "18px" }}
                        />{" "}
                        {i?.name}
                      </>
                    )}
                  />
                  <Editable.Field
                    value={buy_date}
                    placeholder="-"
                    label="Дата покупки"
                    type="date"
                    onChange={(v) => updateParam("buy_date", v)}
                  />
                  <Editable.Field
                    value={price}
                    placeholder="0.00"
                    label="Цена"
                    type="number"
                    onChange={(v) => updateParam("price", v)}
                  />
                  <Editable.Field
                    value={isbn}
                    placeholder="-"
                    label="ISBN"
                    onChange={(v) => updateParam("isbn", v)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {id && (
            <Button
              variant="danger"
              onClick={() => {
                remove(id);
                closeModal();
              }}
              className="me-auto"
            >
              Удалить
            </Button>
          )}

          <Button variant="secondary" onClick={closeModal}>
            Отмена
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              closeModal();
              if (status == MODAL_EDIT) {
                save(data);
              } else {
                create(data);
              }
            }}
          >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(connector, dispatcher)(ModalBook);
