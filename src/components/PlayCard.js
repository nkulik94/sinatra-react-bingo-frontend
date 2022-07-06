import React, { useContext, useState } from "react";
import { BoardContext } from "../context/board";
import { Card, Button } from 'react-bootstrap';

function PlayCard() {
    const [currentNum, setNum] = useState('5')

    return (
        <Card>
            <Card.Title className="current-num">{currentNum}</Card.Title>
            <Card.Body>
                <Card.Text>
                    E pluribus unum
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PlayCard