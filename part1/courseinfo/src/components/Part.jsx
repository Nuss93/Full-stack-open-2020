import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Part extends Component {
    static propTypes = {
        part_name: PropTypes.string,
        exercise: PropTypes.number,
    }

    render() {
        return (
            <p>{this.props.part_name} {this.props.exercise}</p>
        )
    }
}
