import React, { useContext, useState } from "react";
import { BoardContext } from "../context/board";
import { UserContext } from "../context/user";
import { Card, Button } from 'react-bootstrap';

function PlayCard() {
    const boardObj = useContext(BoardContext)
    const userObj = useContext(UserContext)
    const [currentNum, setNum] = useState(' ')
    const [unusedNums, setUnused] = useState(boardObj.board.unused_nums)

    const layout = boardObj.board.board.layout.split(' ')

    function handleNewNum() {
        const unusedNumsArr = unusedNums.split(' ')
        const index = Math.floor(Math.random() * unusedNumsArr.length)
        const newNum = unusedNumsArr[index]
        setNum(newNum)
        unusedNumsArr.splice(index, 1)
        const updatedNums = unusedNumsArr.join(' ')
        setUnused(updatedNums)
        const config = {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({unused_nums: updatedNums})
        }
        fetch(`http://localhost:4000/played-boards/${boardObj.board.id}`, config)
            .then(r => r.json())
            .then(board => {
                console.log("board", board)
                boardObj.setBoard(board)
                const userBoards = userObj.userBoards.map(userBoard => {
                    if (board.id === userBoard.id) return board
                    return userBoard
                })
                userObj.setBoards(userBoards)
            })
    }

    return (
        <Card style={{gridRowEnd: 'span 1'}}>
            <Card.Title>Last Number:</Card.Title>
            <Card.Title className="current-num">{currentNum}</Card.Title>
            <Card.Body>
                <Card.Text>
                    <strong>Remaining numbers:</strong>
                    <br/>
                    {unusedNums}
                </Card.Text>
                <Button onClick={handleNewNum} >Pick a number</Button>
            </Card.Body>
        </Card>
    )
}

export default PlayCard