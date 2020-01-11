import * as React from 'react';
import classNames from './Oscillation.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const Oscillation = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDotOscillate} style={dynamicColor(props.color)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Oscillation;