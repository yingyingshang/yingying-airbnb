import React from "react";

export default function GetAPI(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log("Component rendered")

    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log("Effect function ran")
        // fetch("https://swapi.dev/api/people/" + count)
        fetch(`https://swapi.dev/api/people/ +${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     * 3. What SHOULD be in our dependencies array in this case?
     */

    // side effects
    // // version 03
    // React.useEffect(()=>{
    //     console.log("Effect function ran")
    //     fetch("https://swapi.dev/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [count])

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
            <button onClick={()=> setCount(preCount => preCount + 1)}>Get Next Character</button>
        </div>
    )
}