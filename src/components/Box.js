import React from "react";
import boxes from "./boxesData"

export default function Box(){

    const [squares] = React.useState(boxes)

    const [on, setOn] = React.useState(squares.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggle(id){
        setOn(preOn => !preOn)
        console.log(id)
    }
 
    const squareElements = squares.map(square => (
      <div style={styles} className="box" key={square.id} id={square.id} on={square.on} onClick={()=>toggle(square.id)}/>
    ))

    return (
        <main>
            <h1>Boxes will go here </h1>
            {squareElements}
        </main>
    )
}

