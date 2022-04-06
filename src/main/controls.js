import React from 'react'

function Controls(props) {
    return (
        <div className="controls">
            <div className="control-likes">
                <button className="btn-minus">-</button>
                <span className="likes-quantity">
                    {props.score}
                </span>
                <button className="btn-add">+</button>
            </div>
        </div>
    )
}

export default Controls