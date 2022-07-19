// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        // pass event data in as an arg for the onReceiveCoordinates prop
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    };

    render() {
        return (
            <button 
                onClick={this.handleClick}>Receive Coordinates
            </button>
        )
    }
}