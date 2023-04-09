import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,SetUser] = useState()
    const [loader,SetLoader] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
   

    const registerWithEmailPass = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailAndPassword = (email, password) => {
        SetLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        SetLoader(true)
        return signOut(auth)
    }

    const googleLogIn = ()=>{
        SetLoader(true)
        return signInWithPopup(auth,GoogleProvider)
    }



    const updateUser = (userName, userPhoto) => {
        SetLoader(true)
        return updateProfile(auth.currentUser,{
            displayName: userName,
            photoURL: userPhoto
        })
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,currentUser=>{
            SetUser(currentUser)
            SetLoader(false)
        })
        return ()=> unsubscribed();
    },[]) 
    




    const userInfo = {
        user,
        loader,
        registerWithEmailPass,
        logInWithEmailAndPassword,
        updateUser,
        googleLogIn,
        logOut
        

    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;