// Import FirebaseAuth and firebase.
import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../../firebase";
import "firebase/auth";
// import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
};

function SignInScreen(): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    // Listen for Firebase auth state changes
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
  }, []);

  if (window.firebaseui && window.firebaseui.auth.AuthUI) {
    return (
      <div>
        {isSignedIn ? (
          <div>
            <h1>Welcome, {firebase.auth().currentUser?.displayName}</h1>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  } else {
    return <div>Unable to load FirebaseUI Auth.</div>;
  }
}

// function SignInScreen() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

export default SignInScreen;
