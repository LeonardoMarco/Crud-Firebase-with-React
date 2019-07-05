import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="add">New User</Link></li>
        <li><Link to="login">Logout</Link></li>
    </ul>
);

export default Header;

