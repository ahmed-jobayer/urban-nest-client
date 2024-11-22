/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase-config/firebase";
import useAxiosPublic from "../hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  const [user, setUser] = useState(null);
  // console.log(user);

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;

      const userData = {
        email: user.email,
        role: "buyer", 
        status: "approved",
        cart: [],
        wishlist: [], 
      };

      return axiosPublic.post("/user", userData).then((res) => {
        if (res.data.insertedId) {
          console.log("user stored in the database");
        }
      });
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axiosPublic
          .post(`/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data)
            if (data.data) {
              localStorage.setItem("access-token", data?.data);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    CreateUser,
    Login,
    LogOut,
    GoogleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
