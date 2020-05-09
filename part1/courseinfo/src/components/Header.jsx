import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        course: PropTypes.string,
    }

    render() {
        return (
            <h1>{this.props.course}</h1>
        )
    }
}
