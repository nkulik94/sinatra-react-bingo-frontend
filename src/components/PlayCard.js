import React, { useContext, useState } from "react";
import { BoardContext } from "../context/board";
import { Card, Button } from 'react-bootstrap';

function PlayCard() {
    const boardObj = useContext(BoardContext)
    const [currentNum, setNum] = useState('5')
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
                <Button>Pick a number</Button>
            </Card.Body>
        </Card>
    )
}

export default PlayCard