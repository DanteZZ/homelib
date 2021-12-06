import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faEdit, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Field = ({
  value,
  type,
  head,
  onChange,
  placeholder,
  label,
}) => {

    const [editing, setEditing] = useState(false);
    const [val, setVal] = useState(value);
    const submitHandler = (event) => {
        onChange(val);
        setEditing(false);
        event.preventDefault();
    };
    return (
        <div className="mb-1">
        {label && <strong className="d-block">{label}</strong>}
        {!editing && (head ? <h4 className="d-inline-block">{value || placeholder}</h4> : value || placeholder)}
        {!editing && <Fa onClick={()=>setEditing(true)} className="field-edit" icon={faEdit} />}

        {editing && (
            <>
                <Form className="d-flex" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" style={{flexGrow:1}}>
                        <Form.Control type={type || "text"} value={val} onChange={({target:{value}})=>setVal(value)} placeholder={placeholder} />
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

export default Field;