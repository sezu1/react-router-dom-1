import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <ul className="nav_bar">

            <li>
                <NavLink to='/' className={({isActive}) => isActive ? "nav_bar_class" : ""}>Home Page</NavLink>
            </li>

            <li>
                <NavLink to="/posts" className={({isActive}) => isActive ? "nav_bar_class" : ""}>Posts</NavLink>
            </li>

            <li>
                <NavLink to="/users" className={({isActive}) => isActive ? "nav_bar_class" : ""}>Users</NavLink>
            </li>

        </ul>
    );
}

export default NavBar;