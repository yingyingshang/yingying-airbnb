import React from "react"
import StarFilled from "../images/star-filled.png"
import StarEmpty from "../images/star-empty.png"
import UserImg from "../images/user.png"

export default function Contact(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? {StarFilled} : {StarEmpty}

    setContact(prevThingsArray => {
        return [...prevThingsArray, `Bullshit ${prevThingsArray.length +1}`]
    })

    function toggleFavorite(){
        console.log("Toggle Favorite")
    }

    return(
        <main>
            <article className="card">
                <img src={UserImg} className="card--image" />
                <div className="card--info">
                    <img 
                        src = {starIcon}
                        className = "card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}