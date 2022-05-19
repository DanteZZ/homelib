import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Editable from "../components/Editable/Editable.jsx";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import { MODAL_EDIT } from "../../../.store/modals/actions/constants.js";

const ModalPublisher = ({
  closeModal,
  updateParam,
  save,
  create,
  remove,

  data,
  data: { id, name, image },
  status,
  open,
  loading,
}) => {
  return !open ? null : (
    <>
      <Modal
        show={open}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="htext">
            {status === MODAL_EDIT
              ? "Редактирование издательства"
              : "Создание издательства"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Editable.Field
                value={name}
                placeholder="Введите название"
                label="Название"
                onChange={(v) => updateParam("name", v)}
              />
            </Col>
            <Col md="12">
              <Editable.Image
                value={image}
                onChange={(v) => updateParam("image", v)}
                label="Логотип"
              />
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

export default connect(connector, dispatcher)(ModalPublisher);
