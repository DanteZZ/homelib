import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ReactSelect from "react-select";

const NestedSelect = ({
  value,
  type,
  head,
  onChange,
  placeholder,
  label,
  options,
  isSearchable,
  parentVal="parent",
  optionWrapper = (i) => i?.name,
}) => {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value);
  const submitHandler = (event) => {
    onChange(val.value == "0" ? null : val.value);
    setEditing(false);
    event.preventDefault();
  };

  const wrappedVal = useMemo(() => {
    return value
      ? optionWrapper(options.find((e) => e.id == value)) || null
      : null;
  }, [value]);

  const optsById = useMemo(() => {
    const opts = {};
    for (let k in options) {
      let o = options[k];
      opts[o.id] = o;
    }
    return opts;
  }, [options]);

  const sortedOptions = useMemo(() => {
    const all = options.sort((a, b) => b[parentVal] !== null);
    const catObj = {};

    for (let k in all) {
      const c = all[k];
      if (c[parentVal] == null) {
        if (catObj[c.id]) {
          catObj[c.id] = {...catObj[c.id], ...c}
        } else {
          catObj[c.id] = {...c,childs:[]}
        }
      } else {
        if (catObj[c[parentVal]]) {
          catObj[c[parentVal]].childs.push(c)
        } else {
          catObj[c[parentVal]] = {childs:[c]}
        }
      };
      
    }
    return Object.values(catObj);
  }, [options]
);

  return (
    <div className="mb-1">
      {label && <strong className="d-block">{label}</strong>}
      {!editing &&
        (head ? (
          <h4 className="d-inline-block">{wrappedVal || placeholder}</h4>
        ) : (
          wrappedVal || placeholder
        ))}
      {!editing && (
        <Fa
          onClick={() => {
            setEditing(true);
            if (!value?.label) {
              setVal({ value, label: optionWrapper(optsById[value]) });
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
              <ReactSelect
                value={val}
                onChange={(v) => setVal(v)}
                isSearchable={isSearchable}
                options={[
                  { value: null, label: "Не указано" },
                  ...sortedOptions.map((o) => ({
                    label: optionWrapper(o),
                    options: [
                      { value: o.id, label: optionWrapper(o) },
                      ...(o?.childs?.length ? o.childs.map(c=>({
                        value: c.id,
                        label: optionWrapper(c)
                      })) : []) || null
                    ]
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

export default NestedSelect;