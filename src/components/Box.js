import React from "react";
import boxes from "./boxesData"

export default function Box(){

    const [squares, setSquares] = React.useState(boxes)

    // const [on, setOn] = React.useState(squares.on)

    function toggle(id){
        setSquares(prevSquares => {
            const newSquares = []
            for (let i = 0; i < prevSquares.length; i++){
                const currentSqaure = prevSquares[i]
                if(currentSqaure.id === id){
                    const updatedSqaure = {
                        ...currentSqaure,
                        on: !currentSqaure.on
                    }
                    newSquares.push(updatedSqaure)
                }else{
                    newSquares.push(currentSqaure)
                }
            }
            return newSquares
        })
        // setOn(preOn => !preOn)
        console.log(id)
    }

    const styles = {
        backgroundColor: squares.on ? "#222222" : "#00D8FF"
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

