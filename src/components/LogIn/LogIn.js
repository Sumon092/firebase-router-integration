import React from 'react';
import './LogIn.css';

const LogIn = () => {
    return (
        <div>
            <h3>This is Login</h3>

            <div>
                <button style={{ margin: '20px' }}>Google SignIn</button>
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