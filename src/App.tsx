import React from "react";
import { Navigate } from "react-router-dom";
import "./App.css";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Navigate to="/user" replace={true} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default App;
