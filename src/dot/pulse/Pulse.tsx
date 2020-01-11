import * as React from 'react';
import classNames from './Pulse.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const Pulse = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDotPulse} style={dynamicColor(props.color)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Pulse;