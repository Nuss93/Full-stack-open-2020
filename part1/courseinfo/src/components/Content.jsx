import React from 'react'
import Part from './Part'

export default function Content(props) {
    // console.log(props);
    return props.parts.map((item,index) => (
        <Part item={item} key={index} />
    ))
}
