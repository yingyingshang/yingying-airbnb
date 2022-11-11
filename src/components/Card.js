import React from "react";
// import Swin from "../images/swim.png"
// import Star from "../images/star.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="Card">
            <img src={`${props.img}`} className="card--image" alt="siwn" />
            <div className="card--stats">
                <img src={`${props.star}`} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From Brita's ${props.price}</span> / person</p>
        </div>
    )
}