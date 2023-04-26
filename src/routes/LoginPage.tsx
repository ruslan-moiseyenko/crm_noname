// import { Link } from "react-router-dom";
import { Login } from "../components/Login";

export const LoginPage = () => {
  return (
    <div className="p-3 text-center">
      <h1 className="mb-5">Welcome to our CRM</h1>
      <Login />
      {/* <div className="text-dark">
        <Link to="/register" style={{ color: "#212529" }}>
          Create an account
        </Link>
      </div> */}
    </div>
  );
};
