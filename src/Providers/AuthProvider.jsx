import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import propTypes from "prop-types";

import {  createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //create a new user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user alive?
  useEffect( () => {
   const subscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setIsLoading(false)
    })

    return() => {
      return  subscribe()
    }
  },[])

  const values = {
    createUser,
    loginUser,
    user,
    isLoading,
  };
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: propTypes.node,
  };
  

export default AuthProvider;
