import React from 'react'

export default function Part(props) {
    let item = props.item
    return (
        <p>{item.name} {item.exercises}</p>
    )
}

