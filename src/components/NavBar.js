import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    borderBottom: '2px solid red',
    textDecoration: "none",
    color: "black",
  };

function NavBar() {
    return (
        <nav id='nav-bar'>
        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Home
        </NavLink>
        <NavLink
        to="/all-boards"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Boards
        </NavLink>
        <NavLink
        to="/my-boards"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            My Boards
        </NavLink>
        <NavLink
        to="/play"
        exact
        style={linkStyles}
            activeStyle={{
                borderBottom: '2px solid darkblue',
            }}
        >
            Play
        </NavLink>
        </nav>
    )
}

export default NavBar