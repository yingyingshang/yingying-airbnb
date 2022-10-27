import React from "react";
import Swin from "../images/swim.png"
import Star from "../images/star.png"

export default function Card() {
    return (
        <div>
            <img src={Swin} className="card--image" alt="siwn" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}