import React, { useMemo } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Editable from "../components/Editable/Editable.jsx";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js";

import { MODAL_EDIT } from "../../../.store/modals/actions/constants.js";

const ModalCategory = ({
  closeModal,
  updateParam,
  save,
  create,
  remove,

  data,
  data: { id, name, parent },
  categories,
  status,
  open,
  loading,
}) => {
  const filteredCategories = useMemo(()=>categories.filter(i=>!i.parent && i.id != id),[categories]);
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
              ? "Редактирование категории"
              : "Создание категории"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Editable.Field
                value={name}
                placeholder="Введите название категории"
                label="Название категории"
                onChange={(v) => updateParam("name", v)}
              />
              <Editable.Select
                value={parent}
                placeholder="-"
                label="Родительский жанр"
                options={filteredCategories}
                onChange={(v) => updateParam("parent", v)}
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

export default connect(connector, dispatcher)(ModalCategory);
