import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logoCrm from "../img/LogoCRM.png";
import { Login } from "../components/Login";

export const LoginPage = () => {
  return (
    <>
      <Login />
      <p>
        You can <Link to="/register">register</Link>
      </p>
    </>
  );
};
