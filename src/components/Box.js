import React from "react";
import boxes from "./boxesData"

export default function Box(){

    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
      <div className="box" key={square.id}/>
    ))

    return (
        <main>
            <h1>Boxes will go here </h1>
            {squareElements}
        </main>
    )
}

