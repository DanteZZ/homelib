import React, { useMemo } from "react";
import { Row, Image, Col, Modal, Button, Form, Badge } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Editable from "../components/Editable/Editable.jsx";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import flags from "../../../.common/country.json";

import { MODAL_EDIT } from "../../../.store/modals/actions/constants.js";
import moment from "moment";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalBook = ({
  closeModal,
  updateParam,
  openExternal,
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
    reading,
    ordered,
    handovered,
    serie,
    unhauled,
    read_dates,
  },
  status,
  open,
  loading,

  publishers,
  languages,
  categories,
  covers,

  authors,
  series
}) => {
  const flagsById = useMemo(() => {
    const res = {};
    for (let k in flags) {
      const f = flags[k];
      res[f.id] = f;
    }
    return res;
  }, [flags]);

  const getStatus = () => {
    if (ordered) {return "В пути"}
    if (reading?.status) {return "В процессе прочтения"}
    if (handovered) {return "Отдано"}
    if (unhauled) {return "Unhaul"}
    return "В библиотеке";
  }

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
                {getStatus()}
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  className="d-inline "
                  checked={ordered}
                  onChange={({ target: { checked } }) =>
                    updateParam("ordered", checked)
                  }
                />
                <strong className="ms-2">В пути</strong>  
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
                  <Editable.CreatableSelect
                    value={author}
                    placeholder="Введите автора"
                    label="Автор"
                    options={authors}
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
                  <Editable.CreatableSelect
                    value={serie}
                    label="Серия"
                    options={series}
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
                          src={flagsById?.[i?.icon]?.flag}
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
              <hr/>
              <Row>
                <Col lg="6" md="12">
                  <Form.Check
                    type="checkbox"
                    className="d-inline"
                    checked={reading?.status}
                    onChange={({ target: { checked } }) => {
                        updateParam("reading", {start:moment().format("YYYY-MM-DD"),end:null,page:null,status:checked})
                      } 
                    }
                  />
                  <strong className="ms-2">Читаю сейчас</strong>

                  {reading?.status && <>
                    <Editable.Field
                      value={reading?.start || null}
                      placeholder="-"
                      label="Дата начала"
                      type="date"
                      onChange={(v) => updateParam("reading", {...reading,start:v})}
                    />
                    <Editable.Field
                      value={reading?.page || null}
                      placeholder="-"
                      label="Страница"
                      type="number"
                      onChange={(v) => updateParam("reading", {...reading,page:v})}
                    />
                    <Editable.Field
                      value={reading?.end || null}
                      placeholder="-"
                      label="Дата окончания"
                      type="date"
                      onChange={(v) => updateParam("reading", {...reading,end:v})}
                    />
                    <Button 
                      variant="success" 
                      className="btn-sm"
                      type="submit"
                      onClick={()=>{
                        const res = {start:reading.start,end:reading.end}
                        if (!res.end) {res.end = moment().format("YYYY-MM-DD");}
                        updateParam("read_dates", [...read_dates,res]);
                        updateParam("reading", {start:null, end:null, status:false, page:null})
                      }}
                    >
                      Завершить чтение
                    </Button>
                  </>}
                </Col>
                <Col lg="6" md="12">
                  <strong>Даты прочтения <Badge>{read_dates.length}</Badge></strong><br/>
                  {read_dates.length > 0 ? 
                  read_dates.map((i,k)=><p key={k} className="m-0">{i.start} — {i.end} 
                    <Fa icon={faTimes} className="cursor-pointer ms-1 text-secondary" onClick={() =>
                      updateParam("read_dates", read_dates.filter((d,dk)=>dk !== k))
                    }/>
                  </p>)
                  : "Вы ещё не читали эту книгу"}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="info"
            onClick={() => {
              openExternal();
            }}
          >
            Поиск по базе
          </Button>
          {
            status == MODAL_EDIT &&
            <Button
              variant="secondary"
              onClick={() => {
                if (window.confirm(!unhauled ? "Перенести в unhaul?" : "Убрать из unhaul?")) {
                  if (unhauled) {
                    save({...data,unhauled:null});
                  } else {
                    save({...data,unhauled:true});
                  }
                  closeModal();
                }
              }}
              >
              {unhauled && "Убрать из "} Unhaul
            </Button>
          }
          {id && (
            <>
              <Button
                variant="danger"
                onClick={() => {
                  if (window.confirm("Вы уверенны что хотите удалить книгу?")) {
                    remove(id);
                    closeModal();
                  }
                }}
                className="me-auto ml-3"
              >
                Удалить
              </Button>
            </>
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
