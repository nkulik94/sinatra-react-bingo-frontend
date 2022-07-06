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

    return (
        <ButtonGroup >
            <Button style={{fontSize: 'small'}} disabled={filledSpaces.length === 25} onClick={handleContinue} >Continue Playing</Button>
            <Button style={{fontSize: 'small'}} >Play Again</Button>
            <Button style={{fontSize: 'small'}} variant="danger" >Reset</Button>
        </ButtonGroup>
    )
}

export default UserBoardBtns