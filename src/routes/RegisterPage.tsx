import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

export const RegisterPage = () => {
  return (
    <>
      <h1>This is Register Page</h1>
      <SignUp />
      <p>
        If you have an account, please <Link to="/login">login</Link>
      </p>
    </>
  );
};
