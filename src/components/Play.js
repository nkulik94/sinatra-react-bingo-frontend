import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/user';
import { BoardContext } from "../context/board";
import BoardListItem from "./BoardListItem";
import PlayCard from "./PlayCard";

function Play({ boards, colors }) {
    const user = useContext(UserContext).user
    const userBoards = useContext(UserContext).userBoards
    const setUserBoards = useContext(UserContext).setBoards
    
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
            .then(board => {
                boardObj.setBoard(board)
                setUserBoards([...userBoards, board])
            })
    }
    
    if (!boardObj.board) return <p className="msg">Please <Link to="/all-boards">select a board</Link> or click <a href="#" onClick={handleRandomBoard} >here</a> to get a random board</p>

    const fullHigh = boardObj.board.turns_to_full ? boardObj.board.turns_to_full : 'incomplete'
    const xHigh = boardObj.board.turns_to_x ? boardObj.board.turns_to_x : 'incomplete'
    const lineHigh = boardObj.board.turns_to_line ? boardObj.board.turns_to_line : 'incomplete'
    const highScores = ['My Scores', [fullHigh, xHigh, lineHigh]]
    
    return (
        <div className="play">
            <div className="big-board">
                <BoardListItem board={boardObj.board.board} highScores={highScores} bgColor={colors(boardObj.board)} />
            </div>
            <PlayCard />
        </div>
    )
}

export default Play