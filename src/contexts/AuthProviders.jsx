import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);


    //  create User
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Sign In
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    //Update Name
     const updateName = (name) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name
        })
     } 
    //  Email Verify
    const verifyEmail = (user) =>{
        setLoading(true)
        return sendEmailVerification(user);
    }

    // Google SignIn
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () =>{
        unsubscribe();
    }
   },[])

    // logOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // Forget Password
    const resetPassword= email =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateName,
        verifyEmail,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;