import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/user';
import { BoardContext } from "../context/board";
import { Card } from 'react-bootstrap'
import BingoBoard from "./BingoBoard";

function Play({ boards }) {
    const user = useContext(UserContext).user
    
    // boardObj contains the state for the current board (boardObj.board) and the setter function (boardObj.setBoard)
    const boardObj = useContext(BoardContext)
    
    if (!user) return <p className="msg">Please <Link to='/'>log in</Link> to play</p>

    function handleRandomBoard() {
        const boardIndex = Math.floor(Math.random() * boards.length)
        const body = {
            player_id: user.id,
            board_id: boards[boardIndex].id
        }
        const config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:4000/played-boards', config)
            .then(r => r.json())
            .then(board => boardObj.setBoard(board))
    }
    
    if (!boardObj.board) return <p className="msg">Please <Link to="/all-boards">select a board</Link> or click <a href="#" onClick={handleRandomBoard} >here</a> to get a random board</p>
    console.log(boardObj.board)
    
    return (
        <div className="big-board">
            <Card>
                <Card.Body>
                    <BingoBoard layout={boardObj.board.board.layout.split(' ')} bgColor={'white'} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Play