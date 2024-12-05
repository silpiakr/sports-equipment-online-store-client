import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init.js';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // const signOutUser = (email, password) => {
    //     setLoading(true);
    //     return signOut(auth)
    // }

    // const updateUserProfile = (updateData) => {
    //     return updateProfile(auth.currentUser, updateData)
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }

    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        // signOutUser,
        // updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;