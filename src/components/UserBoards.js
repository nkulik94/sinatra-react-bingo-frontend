import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user';
import BoardListItem from "./BoardListItem";

function UserBoards({ colors }) {
    const user = useContext(UserContext).user
    const boards = useContext(UserContext).userBoards
    if (!user) return <p className="msg">Please <Link to='/'>log in</Link> to view your boards</p>

    return (
        <div style={{textAlign: 'center'}}>
            <h1 onClick={() => console.log(boards)}>My Boards</h1>
            <div className="board-list">
            {boards.map(board => {
                const fullHigh = board.turns_to_full ? board.turns_to_full : 'incomplete'
                const xHigh = board.turns_to_x ? board.turns_to_x : 'incomplete'
                const lineHigh = board.turns_to_line ? board.turns_to_line : 'incomplete'
                const highScores = ['My Scores', [fullHigh, xHigh, lineHigh]]
                return <BoardListItem board={board.board} highScores={highScores} key={board.id} bgColor={colors(board)} />
            })}
            </div>
        </div>
    )
}

export default UserBoards