import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleSignUp = () => {
      return signInWithPopup(auth,googleProvider);
    }

    const createUser = (email, password) => {
       setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    };

    const logOut = () => {
      return signOut(auth);
    }
    
    const logIn = (email,password) => {
        
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser , updatedData);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false);
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
        loading,
        setLoading,
        updateUser,
        googleSignUp,
    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;