// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../../firebase";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from "../../store/slices/userSlice";

firebase.initializeApp(firebaseConfig);

function SignInScreen(): JSX.Element {
  // const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/user",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      //@ts-ignore
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        var user = authResult.user;
        console.log("user: ", user);
        var credential = authResult.credential;
        console.log("credential: ", credential);
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        console.log("isNewUser: ", isNewUser);
        var providerId = authResult.additionalUserInfo.providerId;
        console.log("providerId: ", providerId);
        var operationType = authResult.operationType;
        console.log("operationType: ", operationType);
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect
        // automatically or whether we leave that to developer to handle.

        dispatch(
          setUser({
            email: user?.email,
            phone: user?.phoneNumber
          })
        );

        alert("Signed in successfully");
        return true;
      }
    }
  };

  // useEffect(() => {
  //   // Listen for Firebase auth state changes
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // console.log(user?.email, user?.phoneNumber);
  //     // setIsSignedIn(!!user);
  //     // console.log("user: ", user);
  //     dispatch(
  //       setUser({
  //         email: user?.email,
  //         phone: user?.phoneNumber
  //       })
  //     );
  //     alert("redux dispatch");
  //   });
  // }, [dispatch]);

  if (window.firebaseui && window.firebaseui.auth.AuthUI) {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  } else {
    return <div>Unable to load FirebaseUI Auth.</div>;
  }
}
export default SignInScreen;
