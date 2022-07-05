import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import UserBoards from "./UserBoards";
import AllBoards from "./AllBoards";
import Play from "./Play";

function Body() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/boards')
            .then(r => r.json())
            .then(boards => setBoards(boards))
    }, [])

    return (
        <div id="body">
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path='/my-boards'>
                <UserBoards />
            </Route>
            <Route path="/all-boards" >
                <AllBoards boards={boards}/>
            </Route>
            <Route path="/play">
                <Play boards={boards} />
            </Route>
            </Switch>
        </div>
    )
}

export default Body