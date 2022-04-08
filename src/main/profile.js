import React from 'react'

function Profile(props) {
    return (
        <figure className='comment-visual'>
            <img className='comment-visual-img' src={props.src} alt={props.alt} />
            <figcaption className='figure-content'>
                <h2 className='comment-visual-heading'>{props.username}</h2>
                <p className='comment-visual-text'>{props.created}</p>
            </figcaption>
        </figure>
    )
}

export default Profile