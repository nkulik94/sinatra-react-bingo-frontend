import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import { BoardContext } from "../context/board";
import { Button, ButtonGroup } from "react-bootstrap";

function UserBoardBtns({ board }) {
    const history = useHistory()
    const filledSpaces = board.filled_spaces ? board.filled_spaces.split(' ') : []
    const boardObj = useContext(BoardContext)
    const userObj = useContext(UserContext)

    function handleContinue() {
        boardObj.setBoard(board)
        history.push('/play')
    }

    function handlePlayAgain() {
        const userBoards = userObj.userBoards
        const setUserBoards = userObj.setBoards
        const userId = userObj.user.id
        const config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                player_id: userId,
                board_id: board.board_id
            })
        }

        fetch('http://localhost:4000/played-boards', config)
            .then(r => r.json())
            .then(newBoard => {
                boardObj.setBoard(newBoard)
                setUserBoards([...userBoards, newBoard])
                history.push('/play')
            })
    }

    return (
        <ButtonGroup >
            <Button style={{fontSize: 'small'}} disabled={filledSpaces.length === 25} onClick={handleContinue} >Continue Playing</Button>
            <Button style={{fontSize: 'small'}} onClick={handlePlayAgain} >Play Again</Button>
            <Button style={{fontSize: 'small'}} variant="danger" >Reset</Button>
        </ButtonGroup>
    )
}

export default UserBoardBtns