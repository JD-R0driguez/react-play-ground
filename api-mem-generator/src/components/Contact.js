import React from "react"
import image from './user.png'
import emptyStar from './star-empty.png'
import filledStar from './star-filled.png'

import "./Contact.css"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? filledStar : emptyStar
    
    function toggleFavorite() {
        setContact(prevContact => {
            return {...prevContact, isFavorite:!contact.isFavorite}
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={image} className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
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
