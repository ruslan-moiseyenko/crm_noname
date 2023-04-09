import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log("REGISTER");

  const auth = getAuth();
  console.log(auth);

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="Register" handleClick={handleRegister} />;
};

export { SignUp };
