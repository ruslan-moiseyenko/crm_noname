import React from "react";
import { Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return <Navigate to="/login" replace={true} />;
}

export default App;
