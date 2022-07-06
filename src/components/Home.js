import React, { useContext } from "react";
import { UserContext } from "../context/user";
import LoginPage from "./LoginPage";
import Greeting from "./Greeting";

function Home() {
    const user = useContext(UserContext).user

    return (
        <div>
            {user ? <Greeting /> : <LoginPage />}
        </div>
    )
}

export default Home