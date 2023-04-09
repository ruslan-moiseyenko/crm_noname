import React from "react";
import { Link } from "react-router-dom";

import { removeUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

export const UserPage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>This is User Page</h1>
      <p>
        You can <Link to="/login">login</Link>
      </p>
      <button onClick={() => dispatch(removeUser)}>Logout</button>
    </>
  );
};
