// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../../firebase";
import "firebase/auth";
import "firebaseui/dist/firebaseui.css";

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/user",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
};

function SignInScreen() {
  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;

// function SignInScreen(): JSX.Element {
//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

//   useEffect(() => {
//     // Listen for Firebase auth state changes
//     firebase.auth().onAuthStateChanged((user) => {
//       setIsSignedIn(!!user);
//     });
//   }, []);

//   if (window.firebaseui && window.firebaseui.auth.AuthUI) {
//     return (
//       <div>
//         {isSignedIn ? (
//           <div>
//             <h1>Welcome, {firebase.auth().currentUser?.displayName}</h1>
//             <button onClick={() => firebase.auth().signOut()}>Sign out</button>
//           </div>
//         ) : (
//           <StyledFirebaseAuth
//             uiConfig={uiConfig}
//             firebaseAuth={firebase.auth()}
//           />
//         )}
//       </div>
//     );
//   } else {
//     return <div>Unable to load FirebaseUI Auth.</div>;
//   }
// }
