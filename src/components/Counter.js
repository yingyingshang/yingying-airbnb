import React from "react"
import Count from "./Count"
import "./counter.css"

export default function Counter(props){
    const [count, setCount] = React.useState(0)

    function add(){
        setCount(preCount => preCount + 1)
    }

    function subtract(){
        setCount(preCount => preCount - 1)
    }

    return (
        <div className="counter">
            <h1>Counter for {props.user}</h1>
            <button className="counter--minus" onClick={subtract}>-</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )

}