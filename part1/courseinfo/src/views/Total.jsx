import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Total extends Component {
    static propTypes = {
        exercises1: PropTypes.string,
        exercises2: PropTypes.string,
        exercises3: PropTypes.string,
    }

    render() {
        return (
            <p>Number of exercises {this.props.exercises1 + this.props.exercises2 + this.props.exercises3}</p>
        )
    }
}
