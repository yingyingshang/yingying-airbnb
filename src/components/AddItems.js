import React from "react";

export default function AddItems(){
    const [thingsArray, setThingsArray] = React.useState(["Apple", "Banana"])

    function addItem(){
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Bullshit ${prevThingsArray.length +1}`]
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