import React from 'react';

function BingoBoard( { layout } ) {
    const layoutArr = layout.split(' ')

    return (
        <div className="grid-container">
            {layoutArr.map(num => <div className="grid-item" key={num} >{num}</div>)}
        </div>
    )
}

export default BingoBoard