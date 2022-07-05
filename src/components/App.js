import React from "react";
import { UserProvider } from '../context/user';
import Header from "./Header";
import Body from "./Body";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <Header />
            <Body />
        </UserProvider>
    )
}

export default App