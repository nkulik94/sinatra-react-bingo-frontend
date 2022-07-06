import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function UserBoardBtns({ board }) {
    const filledSpaces = board.filled_spaces ? board.filled_spaces.split(' ') : []

    return (
        <ButtonGroup >
            <Button style={{fontSize: 'small'}} disabled={filledSpaces.length === 25} >Continue Playing</Button>
            <Button style={{fontSize: 'small'}} >Play Again</Button>
            <Button style={{fontSize: 'small'}} variant="danger" >Reset</Button>
        </ButtonGroup>
    )
}

export default UserBoardBtns