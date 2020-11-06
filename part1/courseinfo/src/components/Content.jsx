import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Part from './Part'

export default function Content(props) {
    console.log(props);
    return (
        <div>
            <Part part_name={props.part1} exercise={props.exercises1} />
            <Part part_name={props.part2} exercise={props.exercises2} />
            <Part part_name={props.part3} exercise={props.exercises3} />
        </div>
    )
}
