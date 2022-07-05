import React, { useState } from "react";

const BoardContext = React.createContext();

function BoardProvider({ children }) {
    const [board, setBoard] = useState(null)
    const currentBoard = {
        board,
        setBoard
    }

    return <BoardContext.Provider value={currentBoard}>{children}</BoardContext.Provider>;
}

export { BoardContext, BoardProvider };