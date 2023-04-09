import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Form } from "./Form";
import { useAppDispatch } from "../hooks/reduxHooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        navigate("/user");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Form title="Login" handleClick={handleLogin} />;
};

export { Login };
