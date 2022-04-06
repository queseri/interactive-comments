import React from 'react'
import Profile from './profile'
import Controls from './controls'

function Main(props) {
    return (
        <>
            <Profile src={props.profile} alt={props.alt}
                username={props.username}
                created={props.created} />

            <p>
                {props.content}
            </p>

            <Controls score={props.score} />

            {props.replies.length === 0 ? "" : <ul>
                {props.replies.map(reply => {
                    return <li key={reply.id}>
                        <Profile src={reply.user.image.webp} alt={`Profile of ${reply.user.username}`}
                            username={reply.user.username}
                            created={reply.createdAt}
                        />
                        <p>
                            {reply.content}
                        </p>
                        <Controls score={reply.score} />
                    </li>
                })}
            </ul>}
        </>
    )
}

export default Main