import React from "react"
import './input.css'

const Input = (props) => {
    return <div className="imput">
        <input
            onChange={(e) => props.setValue(e.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
        />
    </div>
}

export default Input
