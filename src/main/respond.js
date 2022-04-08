import React from 'react'
import Reply from '../images/icon-reply.svg'

function Respond() {
    return (

        <div className='respond-control'>
            <button className='btn-respond'>
                <img src={Reply} alt="" aria-hidden={true} />
                <span className='response-text'>Reply</span>
            </button>
        </div>
    )
}

export default Respond