import React from "react";

export default function Meme(){
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem(){
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length +1}`]
        })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button  className="bold" onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}