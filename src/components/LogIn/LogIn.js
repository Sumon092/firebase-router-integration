import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import './LogIn.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const LogIn = () => {
    // const [users]=useFirebase();
    // const {signInWithGoogle}=users;
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const form = location?.state?.form?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(form, { replace: true })
            })
    }
    console.log(user);
    return (
        <div>
            <h3>This is Login</h3>

            <div>
                <button onClick={handleGoogleSignIn} style={{ margin: '20px' }}>Google SignIn</button>
            </div>

            <form>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <br />
                <input type="password" name="password" id="" placeholder='Enter password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LogIn;