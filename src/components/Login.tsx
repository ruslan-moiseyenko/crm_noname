import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { AuthForm } from "./AuthForm";
import { useAppDispatch } from "../hooks/reduxHooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user);
        // console.log(user.email);
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

  return <AuthForm title="Login" handleClick={handleLogin} />;
};

export { Login };
