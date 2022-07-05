import React from "react";
import { UserProvider } from '../context/user';
import CreateAccount from "./CreateAccount";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <CreateAccount />
        </UserProvider>
    )
}

export default App