import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./App.css";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuth } = useAuth();
  console.log("isAuth: ", isAuth);
  // const isAuth = true;

  // that is protected route: if we not logged in it redirects to /login
  return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default App;
