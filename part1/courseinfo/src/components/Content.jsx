import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Part from './Part'

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
            <div>
                <Part part_name={this.props.part1} exercise={this.props.exercises1} />
                <Part part_name={this.props.part2} exercise={this.props.exercises2} />
                <Part part_name={this.props.part3} exercise={this.props.exercises3} />
            </div>
        )
    }
}
