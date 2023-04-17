import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "./AuthForm";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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

  return <AuthForm title="Register" handleClick={handleRegister} />;
};

export { SignUp };
