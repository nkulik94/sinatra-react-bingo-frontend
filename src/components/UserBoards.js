import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user';
import BoardListItem from "./BoardListItem";

function UserBoards() {
    const user = useContext(UserContext).user
    if (!user) return <p className="login-msg">Please <Link to='/'>log in</Link> to view your boards</p>
    const boards = user.played_boards
    
    // console.log(user)


    return (
        <div style={{textAlign: 'center'}}>
            <h1 onClick={() => console.log(boards)}>My Boards</h1>
            <div className="board-list">
            {boards.map(board => {
                const fullHigh = board.turns_to_full ? board.turns_to_full : 'incomplete'
                const xHigh = board.turns_to_x ? board.turns_to_x : 'incomplete'
                const lineHigh = board.turns_to_line ? board.turns_to_line : 'incomplete'
                const highScores = ['My High Scores', [fullHigh, xHigh, lineHigh]]
                return <BoardListItem board={board.board} highScores={highScores} key={board.id} />
            })}
            </div>
        </div>
    )
}

export default UserBoards