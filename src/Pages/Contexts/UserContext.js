import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const setProfile = (name) => {
        return updateProfile(auth.user, {
            displayName:{name}
        });
    }
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo = {
        createUser,
        loading,
        user,
        setProfile,
        signIn,
        logOut,
        handleGoogleSignIn,
        handleGithubSignIn,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;