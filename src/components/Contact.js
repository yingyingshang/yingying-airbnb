import React from "react"
import UserImg from "../images/user.png"
import StarFilled from "../images/star-filled.png"
import StarEmpty from "../images/star-empty.png"
import "./contact.css"

export default function Contact(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    const starIcon = contact.isFavorite ? {StarFilled} : {StarEmpty}

    // let starIcon = contact.isFavorite ? {StarFilled} : {StarEmpty}

    function toggleFavorite(){
        setContact(preContact =>{
            return {
                ...preContact,
                isFavorite: !preContact.isFavorite
            }
        })
    }
    

    return(
        <main>
            <article className="card">
                <img src={UserImg} className="card--image" alt=""/>
                <div className="card--info">
                    <img
                        src = {starIcon}
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt = ""
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