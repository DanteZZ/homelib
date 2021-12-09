import React, {useState} from "react";
import { Row, Col, Modal, Button, Form, Spinner, Nav, Card, Image } from "react-bootstrap";

import Resizer from "react-image-file-resizer";
import ImageToBase64 from "image-to-base64/browser";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import empty_book from "../../../assets/images/book.png"

const urlToBookImage = async (url) => {
  const dataurl = await ImageToBase64(url);
  const arr = dataurl.split(',');
  const mime = "image/jpeg";
  const bstr = atob(dataurl);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
      
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  
  const file = new File([u8arr], "_.jpg", {type:mime});
  return await resizeFile(file);
}

const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        512,
        512,
        "png",
        90,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

const ModalExternal = ({
  updateOpenBook,
  closeModal,
  search,
  open,
  loading,
  list,
}) => {

  const [query, setQuery] = useState("");
  const [nav, setNav] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const searchHandler = (event) => {
    search(query);
    event.preventDefault();
    setNav(0);
  };

  const setData = async (data) => {
    setImageLoading(true);
    const image = await urlToBookImage(data.image || data.image_min);
    setImageLoading(false);
    updateOpenBook({...data,image});
  }

  return !open ? null : (
    <>
      <Modal
        show={open}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="htext">
            Поиск книг
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form className="d-flex" onSubmit={searchHandler}>
                <Form.Group className="mb-3" style={{flexGrow:1}}>
                    <Form.Control value={query} onChange={({target:{value}})=>setQuery(value)} placeholder="Поиск по базе" />
                </Form.Group>
                <Button style={{height:"38px"}} className="ms-3" variant="primary" type="submit">
                    <Fa icon={faSearch} />
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            {
              (imageLoading || loading) && <Col md="12" className="d-flex justify-content-center align-items-center">
              <Spinner animation="grow" variant="primary" />
            </Col>
            }

            {!imageLoading && list.length !== 0 && <>
              <Nav justify variant="tabs">
                {
                  list.map( (gate,k) => 
                  <Nav.Item>
                    <Nav.Link key={k} active={k === nav} onClick={()=>setNav(k)}>
                      <img src={gate.image} style={{height:"20px"}} title={gate.name} />
                    </Nav.Link>
                  </Nav.Item> )
                }
              </Nav>
              {
                list?.[nav]?.results?.length !== 0 && list[nav].results.map((i,k)=>
                <Card className="mt-2 external-product" key={k} onClick={()=>setData(i)}>
                  <Card.Body>
                    <Row>
                      <Col md="3 text-center">
                        <Image src={i.image_min || empty_book} style={{height:"128px"}} />
                      </Col>
                      <Col>
                        <h5>{i.name}</h5>
                        <p>
                          <strong>Автор: </strong>{i.author}
                          <br/>
                          <strong>Цена: </strong>{i.price}
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>)
              }
            </>}
          </Row>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={closeModal}>
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(connector, dispatcher)(ModalExternal);
