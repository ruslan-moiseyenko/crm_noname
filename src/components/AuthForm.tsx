import React, { useState, ChangeEvent } from "react";
import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import logoCrm from "../img/LogoCRM.png";
import SignInScreen from "./authMethods/FirebaseAuth ";

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const AuthForm = ({ title, handleClick }: FormProps) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div
      className="rounded border-0 shadow bg-light p-3 mb-3 mx-auto"
      style={{
        width: "430px"
      }}
    >
      <div className="d-flex justify-content-center  align-items-center mb-5">
        <Image
          src={logoCrm}
          alt="logo"
          roundedCircle
          style={{
            width: "100px",
            marginRight: "20px"
          }}
        />
        <h2 className="text-center">
          <span style={{ color: "#298dff" }}>NONAME</span> CRM
        </h2>
      </div>

      <Form
        style={{
          width: "400px",
          padding: "10px"
        }}
        className="mx-auto rounded "
      >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasChange}
          />
        </Form.Group>

        <Button
          className="rounded w-100"
          variant="primary"
          type="button"
          onClick={() => handleClick(email, password)}
        >
          {title}
        </Button>
        <SignInScreen />
      </Form>
    </div>
  );
};

export { AuthForm };
