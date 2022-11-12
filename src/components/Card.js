import React from "react";
// import Swin from "../images/swim.png"
// import Star from "../images/star.png"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card--image" alt="siwn" />
            <div className="card--stats">
                <img src={`${props.item.star}`} className="card--star" alt="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From Brita's ${props.item.price}</span> / person</p>
        </div>
    )
}