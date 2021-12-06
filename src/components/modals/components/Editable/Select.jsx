import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Select = ({
  value,
  type,
  head,
  onChange,
  placeholder,
  label,
  options,
  optionTitle
}) => {

    const [editing, setEditing] = useState(false);
    const [val, setVal] = useState(value);
    const submitHandler = (event) => {
        onChange(val == '0' ? null : val);
        setEditing(false);
        event.preventDefault();
    };

    const textVal = useMemo(() => {
        return options.find((e)=>e.id == value)?.["name" || optionTitle] || null;
    }, [value]);

    return (
        <div className="mb-1">
        {label && <strong className="d-block">{label}</strong>}
        {!editing && (head ? <h4 className="d-inline-block">{textVal || placeholder}</h4> : textVal || placeholder)}
        {!editing && <Fa onClick={()=>setEditing(true)} className="field-edit" icon={faEdit} />}

        {editing && (
            <>
                <Form className="d-flex" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" style={{flexGrow:1}}>
                        <Form.Select
                            value={val}
                            onChange={({target:{value}})=>setVal(value)}
                        >
                            <option value={0}>Не указан</option>
                            {options.map(o=><option key={o.id} value={o.id}>{o.name || o[optionTitle] || "-"}</option>)}
                        </Form.Select>
                    </Form.Group>
                    
                    <Button style={{height:"38px"}} className="ms-3" variant="primary" type="submit">
                        <Fa icon={faCheckCircle} />
                    </Button>
                </Form>
            </>
        )}
        </div>
    );
};

export default Select;