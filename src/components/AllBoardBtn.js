import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import { BoardContext } from "../context/board";
import { Button } from "react-bootstrap";

function AllBoardBtn({ boardId }) {
    const userObj = useContext(UserContext)
    const setBoard = useContext(BoardContext).setBoard
    const history = useHistory()

    function handleClick() {
        const userId = userObj.user.id
        const userBoards = userObj.userBoards
        const setUserBoards = userObj.setBoards
        const config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                player_id: userId,
                board_id: boardId
            })
        }

        fetch('http://localhost:4000/played-boards', config)
            .then(r => r.json())
            .then(board => {
                setUserBoards([...userBoards, board])
                setBoard(board)
                history.push('/play')
            })
    }

    return <Button disabled={!userObj.user} onClick={handleClick} >Play this board</Button>
}

export default AllBoardBtn