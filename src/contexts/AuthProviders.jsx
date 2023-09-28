import React from 'react';
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config.js';
 
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;