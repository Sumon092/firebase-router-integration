import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import './LogIn.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const LogIn = () => {
    // const [users]=useFirebase();
    // const {signInWithGoogle}=users;
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div>
            <h3>This is Login</h3>

            <div>
                <button onClick={() => signInWithGoogle()} style={{ margin: '20px' }}>Google SignIn</button>
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