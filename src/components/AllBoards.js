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
        <div>
            <h1 onClick={() => console.log(boards)}>All Boards</h1>
            <div className="board-list">
            {boards.map(board => <BoardListItem board={board} key={board.id} />)}
            </div>
        </div>
    )
}

export default AllBoards