import React, { useState } from "react";
import { Button, Form, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCheckCircle,
  faTimesCircle,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

import empty_book from "../../../../assets/images/book.png";

import Resizer from "react-image-file-resizer";

const ImageFile = ({ value, onChange, label, emptySrc }) => {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);
  const submitHandler = (nVal) => {
    setVal(nVal);
    onChange(nVal == "0" ? null : nVal);
    setEditing(false);
  };

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

  const getFileBase64 = async (file) => await resizeFile(file);

  return (
    <div className="mb-1">
      {label && <strong className="d-block">{label}</strong>}
      {!editing && (
        <Card className="">
          <Image src={val || emptySrc || empty_book} />
        </Card>
      )}
      {!editing && (
        <div
          className="text-end c-gray cursor-pointer"
          onClick={() => setEditing(true)}
        >
          <small>изменить </small>
          <Fa className="field-edit" icon={faEdit} />
        </div>
      )}

      {editing && (
        <>
          <label className={"image-select " + (val == value ? "" : "selected")}>
            <div className="drop-area">
              {val == value ? (
                "Выберите файл"
              ) : (
                <>
                  <Image src={val} />
                </>
              )}
            </div>
            <Form.Control
              type="file"
              onChange={({ target: { files } }) => {
                if (files?.[0]?.name) {
                  getFileBase64(files[0])
                    .then((res) => {
                      setVal(res);
                    })
                    .catch((e) => {
                      setVal(value);
                    });
                } else {
                  setVal(value);
                }
              }}
              className="mb-3"
            />
          </label>

          <div className="d-flex">
            <Button
              style={{ height: "38px", flexGrow: 1 }}
              variant="primary"
              onClick={() => submitHandler(val)}
            >
              Выбрать <Fa icon={faCheckCircle} />
            </Button>
            <Button
              style={{ height: "38px" }}
              variant="info"
              className="ms-1"
              title="Очистить изображение"
              onClick={() => submitHandler(null)}
            >
              <Fa icon={faEraser} />
            </Button>
            <Button
              style={{ height: "38px" }}
              variant="danger"
              className="ms-1"
              title="Отмена"
              onClick={() => {
                setEditing(false);
                setVal(value);
              }}
            >
              <Fa icon={faTimesCircle} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageFile;
