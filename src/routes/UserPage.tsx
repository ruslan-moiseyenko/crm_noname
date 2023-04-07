import { Link } from "react-router-dom";

export const UserPage = () => {
  return (
    <>
      <h1>This is User Page</h1>
      <p>
        You can <Link to="/login">login</Link>
      </p>
    </>
  );
};
