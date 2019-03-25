
import React from 'react';
import ReactCursorPosition from 'react-cursor-position'
import { Component } from 'react';

import PointPositionLabel from './PointPositionLabel';
import InstructionsLabel from './InstructionsLabel';

import './MouseTracker.css';

class MouseTracker extends Component {
    render() {
        return (
            <div className="example__target">
            <p>Position du curseur</p>
            <ReactCursorPosition
                mapChildProps={({elementDimensions, isActive, isPositionOutside, position}) => {
                    return {

                        elementDimensions,
                        isActive,
                        isOutside: isPositionOutside,
                        point: position
                    };
                }}
            >

                <PointPositionLabel/>
                <InstructionsLabel/>
            </ReactCursorPosition>
            </div>
        );
    }
}

export { MouseTracker };