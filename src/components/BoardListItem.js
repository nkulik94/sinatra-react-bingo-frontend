import React from 'react';
import BingoBoard from './BingoBoard';

function BoardListItem( { board } ) {
    const layout = board.layout.split(' ')

    return (
        <div className='board-list-item'>
            <BingoBoard layout={layout}/>
        </div>
    )
}

export default BoardListItem