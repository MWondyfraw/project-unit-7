import React from 'react';
import {NavLink} from 'react-dom';

const Nav = () => {
    return (
        <nav className='main-nav'>
            <ul>
                <li><NavLink to="/lions" >Lions </NavLink></li>
                <li><NavLink to="/beaches" >Beaches </NavLink></li>
                <li><NavLink to="/photos" >Photos </NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;