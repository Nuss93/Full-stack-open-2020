import React from 'react'
import PropTypes from 'prop-types'
import Part from './Part'

export default function Content(props) {
    console.log(props);
    return (
        <div>
            <Part part_name={props.part1.name} exercise={props.part1.exercises} />
            <Part part_name={props.part2.name} exercise={props.part2.exercises} />
            <Part part_name={props.part3.name} exercise={props.part3.exercises} />
        </div>
    )
}
