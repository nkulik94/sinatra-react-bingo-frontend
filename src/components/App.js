import React from "react";
import { UserProvider } from '../context/user';
import LoginPage from "./LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <LoginPage />
        </UserProvider>
    )
}

export default App