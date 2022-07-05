import React from "react";
import { UserProvider } from '../context/user';
import Body from "./Body";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <Body />
        </UserProvider>
    )
}

export default App