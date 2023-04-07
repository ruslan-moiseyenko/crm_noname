import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logoCrm from "../img/LogoCRM.png";

export const LoginPage = () => {
  return (
    <>
      <Image
        src={logoCrm}
        alt="logo"
        roundedCircle
        style={{
          width: "250px",
          position: "absolute",
          top: "10px",
          left: "10px"
        }}
      />
      <Form
        style={{
          width: "350px",
          padding: "10px",
          backgroundColor: "CadetBlue"
        }}
        className="mx-auto"
      >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p>
        Are you <Link to="/register">registred</Link>?
      </p>
    </>
  );
};
