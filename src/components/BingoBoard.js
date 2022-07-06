import React from 'react';

function BingoBoard( { layout, bgColor = ['white'] } ) {

    return (
        <div className="grid-container">
            {layout.map((num, index) => {
                const i = bgColor.length === 1 ? 0 : index
                return <div className="grid-item" key={num} style={{backgroundColor: bgColor[i]}}>{num}</div>
            })}
        </div>
    )
}

export default BingoBoard