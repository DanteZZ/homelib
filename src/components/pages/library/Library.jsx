import React, { useMemo, useState } from "react";
import { Row, Card, Col, Form, Button } from "react-bootstrap";

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
  books,

  authors,
  series,
  publishers,
  categories
}) => {
  const notCare = "Не важно";
  const [filter, setFilter] = useState(false);
  const [filterParams, setFilterParams] = useState({
    author: notCare,
    serie: notCare,
    publisher: notCare,
    category: notCare,
    readed: notCare
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
      .filter(b=> fp.readed !== notCare ? fp.readed == b.readed : true)
      .sort((a, b) => b.id - a.id);
    }
  }, [search, books, filter, filterParams, notCare]);

  return (
    <>
      <Row>
        <Col xl="8" lg="6" md="12">
        <h3 className="htext p-0 pt-3">
          Моя библиотека
          {' '}
          <Fa icon={faFilter} onClick={()=>{setFilter(!filter); setSearch("")}} size="xs" className={`filter-icon ${filter ? "active" : ""}`} />
        </h3>
        </Col>
        <Col xl="4" lg="6" md="12" className="justify-content-end mt-3">
          <Form className="d-flex" onSubmit={searchHandler}>
            <Form.Group className="mb-3" style={{flexGrow:1}}>
              <Form.Control value={search} onChange={({target:{value}})=>setSearch(value)} placeholder="Поиск" />
            </Form.Group>
            <Button style={{height:"38px"}} className="ms-3" variant="primary" type="submit">
              <Fa icon={faSearch} />
            </Button>
          </Form>
        </Col>
      </Row>
      {filter && 
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
        </Row>
      }
      
      <Row className="">
        {!filter && !search && 
          <Col xl={2} lg={4} md={4} xs={6} sm={6}>
            <Card className="book-card-add" onClick={() => createBook()}>
              <Card.Body>
                <Fa icon={faPlusCircle} size="2x" />
                Добавить книгу
              </Card.Body>
            </Card>
          </Col>
        }
        

        {sortedBooks.map((book) => (
          <Col key={book.id} xl={2} lg={4} md={4} xs={6} sm={6}>
            <Card className="book-card" onClick={() => openBook(book)}>
              <Card.Img
                variant="top"
                src={book.image || empty_book}
                className="library-book-img"
              />
              <Card.Body>
                <Card.Title className="h6 book-title">
                  {book.name || "Без названия"}
                </Card.Title>
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
