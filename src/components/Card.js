import React from "react";
// import Swin from "../images/swim.png"
// import Star from "../images/star.png"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image" alt="siwn" />
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