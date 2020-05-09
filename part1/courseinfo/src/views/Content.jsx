import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Content extends Component {
    static propTypes = {
        part1: PropTypes.string,
        exercises1: PropTypes.string,
        part2: PropTypes.string,
        exercises2: PropTypes.string,
        part3: PropTypes.string,
        exercises3: PropTypes.string,
    }

    render() {
        return (
            <>
                <p>
                    {this.props.part1} {this.props.exercises1}
                </p>
                <p>
                    {this.props.part2} {this.props.exercises2}
                </p>
                <p>
                    {this.props.part3} {this.props.exercises3}
                </p>
            </>
        )
    }
}
