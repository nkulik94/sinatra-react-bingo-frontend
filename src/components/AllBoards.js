import React, { useEffect, useState } from "react";
import BoardListItem from "./BoardListItem";

function AllBoards() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/boards')
            .then(r => r.json())
            .then(boards => setBoards(boards))
    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h1 onClick={() => console.log(boards)}>Boards and Scores</h1>
            <div className="board-list">
            {boards.map(board => {
                const fullHigh = board.full_high_score ? board.full_high_score : 'incomplete'
                const xHigh = board.x_high_score ? board.x_high_score : 'incomplete'
                const lineHigh = board.line_high_score ? board.line_high_score : 'incomplete'
                const highScores = ['High Scores For This Board', [fullHigh, xHigh, lineHigh]]
                return <BoardListItem board={board} highScores={highScores} key={board.id}/>
            })}
            </div>
        </div>
    )
}

export default AllBoards