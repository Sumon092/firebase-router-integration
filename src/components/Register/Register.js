import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { signInWithGoogle } = useFirebase();
    // const [user] = useFirebase();
    return (
        <div>
            <h3>Please Register Now !!</h3>
            <div>
                <button onClick={signInWithGoogle} style={{ margin: '20px' }}>Google SignIn</button>
            </div>

            <form>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <br />
                <input type="password" name="password" id="" placeholder='Enter password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;