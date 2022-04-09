import React, { useState } from 'react';
import app from '../firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(results => {
                const user = results.user;
                console.log(user);
            })
    }
    return (
        { user, signInWithGoogle }
    );
}

export default useFirebase;