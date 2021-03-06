import React from 'react';
import BingoBoard from './BingoBoard';
import AllBoardBtn from './AllBoardBtn';
import UserBoardBtns from './UserBoardBtns';
import { Card, ListGroup } from 'react-bootstrap';

function BoardListItem( { board, highScores, bgColor, hasBtn, playBoard } ) {
    const layout = board.layout.split(' ')
    let btns

    if (hasBtn) {
        btns = hasBtn === 'all' ? <AllBoardBtn boardId={board.id} /> : <UserBoardBtns board={playBoard} />
    }

    return (
        <div className='board-list-item'>
            <Card>
                <Card.Title>Board Number {board.id}</Card.Title>
                <Card.Body>
                    <BingoBoard layout={layout} bgColor={bgColor} />
                    <Card.Header>{highScores[0]}</Card.Header>
                    <ListGroup>
                        <ListGroup.Item>Turns to full: {highScores[1][0]}</ListGroup.Item>
                        <ListGroup.Item>Turns to X: {highScores[1][1]}</ListGroup.Item>
                        <ListGroup.Item>Turns to line: {highScores[1][2]}</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    {btns}
                </Card.Body>
            </Card>
        </div>
    )
}

export default BoardListItem