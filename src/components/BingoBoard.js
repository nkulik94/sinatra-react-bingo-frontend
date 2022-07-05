import React from 'react';

function BingoBoard() {
    const arr = []
    for (let i = 0; i < 25; i ++) {
        arr.push(i)
    }

    return (
        <div className="grid-container">
            {arr.map(num => <div className="grid-item" key={num} >{num}</div>)}
        </div>
    )
}

export default BingoBoard