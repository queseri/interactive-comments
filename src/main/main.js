import React from 'react'
import Profile from './profile'
import Controls from './controls'
import Respond from './respond'

function Main(props) {
    return (
        <>
            <Profile src={props.profile} alt={props.alt}
                username={props.username}
                created={props.created} />

            <p className='comment-text'>
                {props.content}
            </p>

            <Controls score={props.score} />
            <Respond />

            {props.replies.length === 0 ? "" : <ul className='comments-container secondary-comments'>
                {props.replies.map(reply => {
                    return <li key={reply.id}
                        className='grid comments-item secondary-comments-item'>
                        <Profile
                            src={reply.user.image.webp}
                            alt={`Profile of ${reply.user.username}`}
                            username={reply.user.username}
                            created={reply.createdAt}
                        />
                        <p className='comment-text'>
                            <span className='comment-text-to'>@{reply.replyingTo}</span> {reply.content}
                        </p>
                        <Controls score={reply.score} />
                        <Respond />
                    </li>
                })}
            </ul>}
        </>
    )
}

export default Main