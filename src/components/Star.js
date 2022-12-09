import React from "react";
import StarFilled from "../images/star-filled.png"
import StarEmpty from "../images/star-empty.png"

export default function Star(props){
    const starIcon = props.isFavorite ? {StarFilled} : {StarEmpty}

    return (
        <img
            src = {`${starIcon}`}
        />
    )
}