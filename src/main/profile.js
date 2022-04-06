import React from 'react'

function Profile(props) {
    return (
        <figure className="intro-comment">
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <h2>{props.username}</h2>
                <p>{props.created}</p>
            </figcaption>
        </figure>
    )
}

export default Profile