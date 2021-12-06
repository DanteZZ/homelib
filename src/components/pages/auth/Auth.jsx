import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { connect } from "react-redux";
import connector from "./connect.js";
import dispatcher from "./dispatch.js"

const Auth = ({
  login
}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    login(username,password);
    event.preventDefault();
  };

  return (
    <Card>
      <Card.Body className="p-5">
        <Form onSubmit={loginHandler}>
          <h2 className="text-center"><b>HomeLib</b></h2>
          <p className="text-center">Авторизация</p>
          <Form.Group className="mb-3">
            <Form.Label>Логин</Form.Label>
            <Form.Control required value={username} onChange={({target:{value}})=>setUsername(value)} type="text" placeholder="Логин" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control required value={password} onChange={({target:{value}})=>setPassword(value)} type="password" placeholder="Пароль" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" className="w-75" type="submit">
              Войти
            </Button>
          </div>
          
        </Form>
      </Card.Body>
    </Card>
  );
};

export default connect(connector,dispatcher)(Auth);