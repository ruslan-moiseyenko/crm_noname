import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "./routes/RegisterPage";
import { LoginPage } from "./routes/LoginPage";
import { UserPage } from "./routes/UserPage";
import "./firebase";
import { ErrorPage } from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <ErrorPage />
  }
  // {
  //   path: "*",
  //   element: <ErrorPage />
  // }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
