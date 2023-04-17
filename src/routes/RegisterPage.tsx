import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

export const RegisterPage = () => {
  return (
    <div className="p-3 text-center">
      <h1 className="mb-5">You can register here</h1>
      <SignUp />
      <p>
        If you have an account, please{" "}
        <Link to="/login" style={{ color: "#212529" }}>
          login
        </Link>
      </p>
    </div>
  );
};
