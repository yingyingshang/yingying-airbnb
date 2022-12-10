import React from "react"
import Logo from '../images/airbnb-logo.png'
import "../style.css";

export default function Navbar(props) {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <p>Current user: {props.user}</p>
        </nav>
    )
}