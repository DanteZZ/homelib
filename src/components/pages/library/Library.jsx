import React, { useMemo, useState } from "react";
import { Row, Card, Col, Form, Button, Badge, ProgressBar, Alert } from "react-bootstrap";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import empty_book from "../../../assets/images/book.png";

import ReactSelect from "react-select";

const Library = ({ 
  openBook,
  createBook,
  allbooks,

  authors,
  series,
  publishers,
  categories,
  unhaul,
  useFilter=true,
  customHead="Моя библиотека"
}) => {
  const books = useMemo(()=>allbooks.filter(b=>unhaul ? b.unhauled : !b.unhauled),[allbooks,unhaul])

  const notCare = "Не важно";
  const [filter, setFilter] = useState(false);
  const [filterParams, setFilterParams] = useState({
    author: notCare,
    serie: notCare,
    publisher: notCare,
    category: notCare,
    readed: notCare,
    readng: null
  });
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
  }

  const usedParams = useMemo(() => {
    const used = {
      categories:[],
      publishers:[]
    }
    for (var k in books) {
      const item = books[k];
      if (item.category && used.categories.indexOf(item.category) < 0) {used.categories.push(item.category);}
      if (item.publisher && used.publishers.indexOf(item.publisher) < 0) {used.publishers.push(item.publisher);}
    };
    return {
      categories:categories.filter(i=>used.categories.indexOf(i.id) >= 0),
      publishers:publishers.filter(i=>used.publishers.indexOf(i.id) >= 0),
    }
  },[books,categories,publishers])



  const sortedBooks = useMemo(() => {
    if (!filter) {
      let res = books.sort((a, b) => b.id - a.id);
      if (search !== "") { res = res.filter(b=>b.name.toUpperCase().indexOf(search.toUpperCase()) > -1) }
      return res;
    } else {
      const fp = filterParams;
      return books
      .filter(b=> fp.author !== notCare ? fp.author == b.author : true)
      .filter(b=> fp.serie !== notCare ? fp.serie == b.serie : true)
      .filter(b=> fp.publisher !== notCare ? fp.publisher == b.publisher : true)
      .filter(b=> fp.category !== notCare ? fp.category == b.category : true)
      .filter(b=> fp.readed !== notCare ? fp.readed ? b.read_dates.length > 0 : b.read_dates.length == 0 : true)
      .filter(b=> fp.reading ? b.reading?.status : true)
      .sort((a, b) => b.id - a.id);
    }
  }, [search, books, filter, filterParams, notCare]);

  return (
    <>
      <Row>
        <Col xl="8" lg="6" md="12">
        <h3 className="htext p-0 pt-3 d-flex align-items-center">
          <Badge style={{fontSize:"0.5em"}} className="me-2">
            {
              search || filter ? sortedBooks.length+" / "+books.length : sortedBooks.length
            }
            {' '}книг
          </Badge>
          {' '}
          {customHead}
          {' '}
          {useFilter&& <Fa icon={faFilter} onClick={()=>{setFilter(!filter); setSearch("")}} size="xs" className={`ms-2 filter-icon ${filter ? "active" : ""}`} /> }
        </h3>
        </Col>
        <Col xl="4" lg="6" md="12" className="justify-content-end mt-3">
        {!filter && 
          <Form className="d-flex" onSubmit={searchHandler}>
            <Form.Group className="mb-3" style={{flexGrow:1}}>
              <Form.Control value={search} onChange={({target:{value}})=>setSearch(value)} placeholder="Поиск" />
            </Form.Group>
            <Button style={{height:"38px"}} className="ms-3" variant="primary" type="submit">
              <Fa icon={faSearch} />
            </Button>
          </Form>
        }
        </Col>
      </Row>
      {useFilter && filter && 
        <Row className="mb-2">
          <Col md="6" xl="4" className="mb-2">
            <strong>Автор</strong>
            <ReactSelect
              value={{value:filterParams.author, label:filterParams.author || "Не указано"}}
              onChange={(v) => setFilterParams({...filterParams,author:v.value})}
              isSearchable
              placeholder={notCare}
              options={[
                { value: notCare, label: notCare },
                { value: null, label: "Не указано" },
                ...authors.map((o) => ({
                  value: o,
                  label: o,
                })),
              ]}
            />
          </Col>
          <Col md="6" xl="4" className="mb-2">
            <strong>Серия</strong>
            <ReactSelect
              value={{value:filterParams.serie, label:filterParams.serie || "Не указано"}}
              onChange={(v) => setFilterParams({...filterParams,serie:v.value})}
              isSearchable
              placeholder={notCare}
              options={[
                { value: notCare, label: notCare },
                { value: null, label: "Не указано" },
                ...series.map((o) => ({
                  value: o,
                  label: o,
                })),
              ]}
            />
          </Col>
          <Col md="6" xl="4" className="mb-2">
            <strong>Издательство</strong>
            <ReactSelect
              value={{
                value:filterParams.publisher,
                label: filterParams.publisher == notCare ? notCare : usedParams.publishers?.find(e=>e.id == filterParams.publisher)?.name || "Не указано"
              }}
              onChange={(v) => setFilterParams({...filterParams,publisher:v.value})}
              isSearchable
              placeholder={notCare}
              options={[
                { value: notCare, label: notCare },
                { value: null, label: "Не указано" },
                ...usedParams.publishers.map((o) => ({
                  value: o.id,
                  label: o.name,
                })),
              ]}
            />
          </Col>
          <Col md="6" xl="4" className="mb-2">
            <strong>Жанр</strong>
            <ReactSelect
              value={{
                value:filterParams.category,
                label: filterParams.category == notCare ? notCare : usedParams.categories?.find(e=>e.id == filterParams.category)?.name || "Не указано"
              }}
              onChange={(v) => setFilterParams({...filterParams,category:v.value})}
              isSearchable
              placeholder={notCare}
              options={[
                { value: notCare, label: notCare },
                { value: null, label: "Не указано" },
                ...usedParams.categories.map((o) => ({
                  value: o.id,
                  label: o.name,
                })),
              ]}
            />
          </Col>
          <Col md="6" xl="4" className="mb-2">
            <strong>Прочитано</strong>
            <ReactSelect
              value={{
                value:filterParams.readed,
                label: filterParams.readed === notCare ? "Не важно" : filterParams.readed ? "Да" : "Нет"
              }}
              onChange={(v) => setFilterParams({...filterParams,readed:v.value})}
              isSearchable
              placeholder={notCare}
              options={[
                { value: notCare, label: notCare },
                { value: null, label: "Нет" },
                { value: true, label: "Да" },
              ]}
            />
          </Col>
          <Col md="6" xl="4" className="mb-2" style={{paddingTop:"1.9em"}}>
            <Form.Check
              type="checkbox"
              className="d-inline"
              checked={filterParams.reading}
              onChange={({ target: { checked } }) =>setFilterParams({...filterParams,reading:checked || null})}
            />
            <strong className="ms-2">Читаю сейчас</strong>
            
          </Col>
        </Row>
      }
      
      <Row className="">
        {!unhaul && !filter && !search && 
          <Col xl={2} lg={4} md={4} xs={6} sm={6}>
            <Card className="book-card-add" onClick={() => createBook()}>
              <Card.Body>
                <Fa icon={faPlusCircle} size="2x" />
                Добавить книгу
              </Card.Body>
            </Card>
          </Col>
        }

        {unhaul && sortedBooks.length < 1 && <>
            <Col>
              <Alert variant="light">
                Нет книг для отображения
              </Alert>
            </Col>
        </>}
        

        {sortedBooks.map((book) => (
          <Col key={book.id} xl={2} lg={4} md={4} xs={6} sm={6}>
            <Card className="book-card position-relative" onClick={() => openBook(book)}>
              { (book.ordered || book.read_dates.length > 0 || book.reading?.status) && 
                <Badge className="success position-absolute top end-0 m-2 shadow-sm" bg={book.ordered ? "warning" : book.reading?.status > 0 ? "info" : "success"}>
                  {book.ordered ? "В пути" : book.reading?.status > 0 ? "Читаю сейчас" : "Прочитано"}
                </Badge>
              }
              <Card.Img
                variant="top"
                src={book.image || empty_book}
                className="library-book-img"
              />
              {book.reading?.status &&
                <div
                  className="position-absolute w-100 p-2"
                  style={{top: "294px"}}
                >
                  <ProgressBar
                    animated 
                    variant="info"
                    now={book.pages ? parseInt(100/book.pages*(book.reading?.page || 0)) : 50}
                    label={`${book.pages > 0 ? parseInt(100/book.pages*(book.reading?.page || 0)) : "??? "}%`}
                  />
                </div>
              }
              <Card.Body>
                <Card.Title className="h6 book-title">
                  {book.name || "Без названия"}
                </Card.Title>
                <Card.Text>
                  <small className="book-author">{book.author || "Автор не указан"}</small>
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
