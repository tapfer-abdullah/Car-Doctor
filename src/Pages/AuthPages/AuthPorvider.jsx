/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Config/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (loadedUser) => {
      setUser(loadedUser);
      setLoader(false);
      console.log(loadedUser?.email);

      if (loadedUser?.email) {
        const loggedUser = {
          email: loadedUser.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          // body: JSON.stringify({email: result.user.email})
          // or
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("car-access-token", data.token);
          });
      }
      else{
        localStorage.removeItem("car-access-token");
      }
    });
  }, []);

  const Login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    return signOut(auth);
  };

  const LoginWGoogle = () => {
    setLoader(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const LoginWGithub = () => {
    setLoader(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    loader,
    Login,
    Register,
    Logout,
    LoginWGoogle,
    LoginWGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
