import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { BoardContext } from "../context/board";
import Home from "./Home";
import UserBoards from "./UserBoards";
import AllBoards from "./AllBoards";
import Play from "./Play";

function Body() {
    const [boards, setBoards] = useState([])
    const boardObj = useContext(BoardContext)

    useEffect(() => {
        fetch('http://localhost:4000/boards')
            .then(r => r.json())
            .then(boards => setBoards(boards))
    }, [])

    function setColors(board) {
        const colors = []
        for (let i = 0; i < 25; i++) {
            colors.push('white')
        }

        if (board.filled_spaces)  {
            const filledSpaces = board.filled_spaces.split(' ')
            filledSpaces.map(num => colors[parseInt(num, 10)] = 'green')
        }
        return colors
    }

    return (
        <div id="body">
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path='/my-boards'>
                <UserBoards colors={setColors} />
            </Route>
            <Route path="/all-boards" >
                <AllBoards boards={boards}/>
            </Route>
            <Route path="/play">
                <Play boards={boards} colors={setColors} />
            </Route>
            </Switch>
        </div>
    )
}

export default Body