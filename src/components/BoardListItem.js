import React from 'react';
import BingoBoard from './BingoBoard';
import { Card, ListGroup } from 'react-bootstrap';

function BoardListItem( { board, highScores } ) {
    const layout = board.layout.split(' ')

    return (
        <div className='board-list-item'>
            <Card>
                <Card.Title>Board Number {board.id}</Card.Title>
                <Card.Body>
                    <BingoBoard layout={layout} bgColor={['white']} />
                    <Card.Header>{highScores[0]}</Card.Header>
                    <ListGroup>
                        <ListGroup.Item>Fewest turns to full: {highScores[1][0]}</ListGroup.Item>
                        <ListGroup.Item>Fewest turns to X: {highScores[1][1]}</ListGroup.Item>
                        <ListGroup.Item>Fewest turns to line: {highScores[1][2]}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BoardListItem