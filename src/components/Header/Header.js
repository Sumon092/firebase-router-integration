import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Sign out</button> :
                        <Link to='LogIn'>LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;