import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from "../../store/slices/userSlice";

const provider = new GoogleAuthProvider();

const GoogleSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token
          })
        );
        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        alert(errorMessage);
      });
  };

  return (
    <Button onClick={handleLogin} type="button">
      Login with Google
    </Button>
  );
};

export { GoogleSignIn };
