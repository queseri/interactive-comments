import React from 'react'
import Plus from '../images/icon-plus.svg'
import Minus from '../images/icon-minus.svg'

function Controls(props) {
    return (
        <div className='controls'>
            <div className='control-likes flex'>
                <button className='btn-minus'>
                    <img src={Minus} alt="" aria-hidden={true} />
                    <span className="sr-only">reduce likes</span>
                </button>
                <span className='likes-quantity'>
                    {props.score}
                </span>
                <button className="btn-add flex">
                    <img src={Plus} alt="" aria-hidden={true} />
                    <span className="sr-only">increase likes</span>
                </button>
            </div>
        </div>
    )
}

export default Controls