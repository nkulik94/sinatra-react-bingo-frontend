import React from "react";
import { UserProvider } from '../context/user';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <h1>hi</h1>
        </UserProvider>
    )
}

export default App