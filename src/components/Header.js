import React from "react";
import NavBar from "./NavBar";

function Header() {

    return (
        <header position="relative">
            <h1>Sinatra Bingo</h1>
            <h3>Don't judge an app by its frontend</h3>
            <NavBar />
        </header>
    )
}

export default Header