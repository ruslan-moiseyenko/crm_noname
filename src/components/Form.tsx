import React, { useState, ChangeEvent } from "react";

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const Form = ({ title, handleClick }: FormProps) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handlePasChange}
      />
      <button type="button" onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </form>
  );
};

export { Form };

// <Image
// src={logoCrm}
// alt="logo"
// roundedCircle
// style={{
//   width: "250px",
//   position: "absolute",
//   top: "10px",
//   left: "10px"
// }}
// />
// <Form
// style={{
//   width: "350px",
//   padding: "10px",
//   backgroundColor: "CadetBlue"
// }}
// className="mx-auto"
// >
// <Form.Group className="mb-3 " controlId="formBasicEmail">
//   <Form.Label>Email address</Form.Label>
//   <Form.Control type="email" placeholder="Enter email" />
//   <Form.Text className="text-muted">
//     We'll never share your email with anyone else.
//   </Form.Text>
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicPassword">
//   <Form.Label>Password</Form.Label>
//   <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicCheckbox">
//   <Form.Check type="checkbox" label="Check me out" />
// </Form.Group>
// <Button variant="primary" type="submit">
//   Login
// </Button>
// </Form>

// <p>
// Are you <Link to="/register">registred</Link>?
// </p>
