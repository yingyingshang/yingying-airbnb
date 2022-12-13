import React from "react";

export default function GetAPI(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("Component rendered")

    // side effects
    // version 03

    React.useEffect(()=>{console.log("Effect function ran")}, [count])

    // version 02
    // React.useEffect(function(){
    //     fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    // })

    // version 01
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={()=> setCount(preCount => preCount + 1)}>Add</button>
        </div>
    )
}