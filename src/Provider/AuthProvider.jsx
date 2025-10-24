import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user);
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    };

    const logOut = () => {
      return signOut(auth);
    }
    
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  return ()=>{
    unsubscribe();
  }
},[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;