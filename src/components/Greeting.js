import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../context/user";

function Greeting() {
    const user = useContext(UserContext).user
    const setUser = useContext(UserContext).setUser

    return (
        <div id="greeting">
            <h1>Hello {user.name}!</h1>
            <h3>You are logged in as {user.username}</h3>
            <br/>
            <Button variant="danger" onClick={() => setUser(null)} >Sign Out</Button>
        </div>
    )
}

export default Greeting