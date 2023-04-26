import React, { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

// import { removeUser } from "../store/slices/userSlice";
// import { useAppDispatch } from "../hooks/reduxHooks";

export const UserPage = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log("user: ", user);
    });
    console.log("isSignedIn: ", isSignedIn);
  }, [isSignedIn]);

  const handleLogout = () => {
    // dispatch(removeUser());
    // navigate("/");
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <div className="p-3">
      <div>
        <h1 className="mx-auto">This is User Page</h1>
        <button onClick={handleLogout} type="button">
          Logout
        </button>
      </div>
      {/* {isSignedIn ? (
        <div>
          <h1 className="mx-auto">This is User Page</h1>
          <button onClick={handleLogout} type="button">
            Logout
          </button>
        </div>
      ) : (
        <>
          <Navigate to="/login" replace={true} />
        </>
      )} */}
    </div>
  );
};
