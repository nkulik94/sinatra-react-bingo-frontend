import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import UserBoards from "./UserBoards";
import AllBoards from "./AllBoards";
import Play from "./Play";

function Body() {
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
                <AllBoards />
            </Route>
            <Route path="/play">
                <Play />
            </Route>
            </Switch>
        </div>
    )
}

export default Body