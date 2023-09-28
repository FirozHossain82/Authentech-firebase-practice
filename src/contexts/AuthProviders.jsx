import React, { useState } from 'react';
import { createContext } from "react";
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config.js';

 
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    // create User
   const registerUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }

    const authInfo = {
            user,
            registerUser
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;