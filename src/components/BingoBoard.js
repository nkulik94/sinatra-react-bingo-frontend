import React from 'react';

function BingoBoard( { layout } ) {
    const arr = []
    for (let i = 0; i < 25; i ++) {
        arr.push(i)
    }

    const nums = layout ? layout : arr

    return (
        <div className="grid-container">
            {nums.map(num => <div className="grid-item" key={num} >{num}</div>)}
        </div>
    )
}

export default BingoBoard