import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ReactSelectCreatable from "react-select/creatable";

const CreatableSelect = ({
  value,
  head,
  onChange,
  placeholder,
  label,
  options,
  isSearchable
}) => {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState({value,label:value});
  const submitHandler = (event) => {
    onChange(val.value == "0" ? null : val.value);
    setEditing(false);
    event.preventDefault();
  };

  return (
    <div className="mb-1">
      {label && <strong className="d-block">{label}</strong>}
      {!editing &&
        (head ? (
          <h4 className="d-inline-block">{value || placeholder}</h4>
        ) : (
          value || placeholder
        ))}
      {!editing && (
        <Fa
          onClick={() => {
            setEditing(true);
            if (!value?.label) {
              setVal({ value, label:value });
            }
          }}
          className="field-edit"
          icon={faEdit}
        />
      )}

      {editing && (
        <>
          <Form className="d-flex" onSubmit={submitHandler}>
            <Form.Group className="mb-3" style={{ flexGrow: 1 }}>
              <ReactSelectCreatable
                value={val}
                onChange={(v) => setVal(v)}
                isSearchable={isSearchable}
                options={[
                  { value: null, label: "Не указан" },
                  ...options.map((o) => ({
                    value: o,
                    label: o
                  })),
                ]}
              />
            </Form.Group>

            <Button
              style={{ height: "38px" }}
              className="ms-3"
              variant="primary"
              type="submit"
            >
              <Fa icon={faCheckCircle} />
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default CreatableSelect;
