import './button.css'
import React from 'react'

const Button = ({ onClick, children, kind }) => (
    <button onClick={onClick} className={`button -${kind}`}>
        {children}
    </button>
)

export default Button