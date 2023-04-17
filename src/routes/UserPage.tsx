import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { removeUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

export const UserPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className="p-3">
      <h1 className="mx-auto">This is User Page</h1>
      <p>
        You can <Link to="/login">login</Link>
      </p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};
