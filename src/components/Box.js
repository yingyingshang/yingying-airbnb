import React from "react";
import boxes from "./boxesData"

export default function Box(props){

    const [squares] = React.useState(boxes)

    const styles = {
        backgroundColor: squares.on ? "#222222" : "#cccccc"
    }

    const squareElements = squares.map(square => (
      <div style={styles} className="box" key={square.id} on={square.on}/>
    ))

    return (
        <main>
            <h1>Boxes will go here </h1>
            {squareElements}
        </main>
    )
}

