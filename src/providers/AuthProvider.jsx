import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   


    const createUser = (email, password) =>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password); 

    }

    const createUserByGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currnetUser =>{
            console.log('state changed', currnetUser);
            setUser(currnetUser);
            setLoading(false);
        })

        return () => unSubscribe();
    },[])

const authInfo = {
    user,
    createUser,
    createUserByGoogle,
    logIn,
    logOut,
    loading
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;