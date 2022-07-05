import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user';
import BoardListItem from "./BoardListItem";

function UserBoards() {
    const user = useContext(UserContext).user
    if (!user) return <p className="msg">Please <Link to='/'>log in</Link> to view your boards</p>
    const boards = user.played_boards

    return (
        <div style={{textAlign: 'center'}}>
            <h1 onClick={() => console.log(boards)}>My Boards</h1>
            <div className="board-list">
            {boards.map(board => {
                const colors = []
                for (let i = 0; i < 25; i++) {
                    colors.push('white')
                }
            
                if (board.filled_spaces)  {
                    const filledSpaces = board.filled_spaces.split(' ')
                    filledSpaces.map(num => colors[parseInt(num, 10)] = 'green')
                }

                const fullHigh = board.turns_to_full ? board.turns_to_full : 'incomplete'
                const xHigh = board.turns_to_x ? board.turns_to_x : 'incomplete'
                const lineHigh = board.turns_to_line ? board.turns_to_line : 'incomplete'
                const highScores = ['My Scores', [fullHigh, xHigh, lineHigh]]
                return <BoardListItem board={board.board} highScores={highScores} key={board.id} bgColor={colors} />
            })}
            </div>
        </div>
    )
}

export default UserBoards