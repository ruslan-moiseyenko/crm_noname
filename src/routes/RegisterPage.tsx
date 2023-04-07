import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <h1>This is User Page</h1>
      <p>
        If you have an account, please <Link to="/login">login</Link>
      </p>
    </>
  );
};
