import React from "react";
import { Button, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import logoCrm from "../img/LogoCRM.png";
import SignInScreen from "./authMethods/FirebaseAuth ";

const AuthForm = () => {
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

      <SignInScreen />
    </div>
  );
};

export { AuthForm };
