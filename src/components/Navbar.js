import React from "react"
import Logo from '../images/airbnb-logo.png'
import "../style.css";

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="logo" />
        </nav>
    )
}