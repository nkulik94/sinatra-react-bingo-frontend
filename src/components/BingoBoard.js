import React from 'react';

function BingoBoard( { layout, bgColor } ) {

    return (
        <div className="grid-container">
            {layout.map(num => <div className="grid-item" key={num} style={{backgroundColor: bgColor}}>{num}</div>)}
        </div>
    )
}

export default BingoBoard