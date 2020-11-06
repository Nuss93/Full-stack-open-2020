import React from 'react'

export default function Total(props) {
    const calculateTotal = () => {
        let TOTAL = 0

        props.parts.forEach(item => {
            console.log(item);
            TOTAL = TOTAL + item.exercises
        });

        return TOTAL
    }
    
    return (
        <p>Number of exercises {calculateTotal()}</p>
    )
}
