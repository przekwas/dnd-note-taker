import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/notes">Notes</Link>
            <Link to="/notes/new">Add Note</Link>
        </div>
    );
}

export default Navbar;