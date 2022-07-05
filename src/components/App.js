import React from "react";
import { UserProvider } from '../context/user';
import { BoardProvider } from "../context/board";
import Header from "./Header";
import Body from "./Body";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <UserProvider>
            <Header />
            <BoardProvider>
                <Body />
            </BoardProvider>
        </UserProvider>
    )
}

export default App