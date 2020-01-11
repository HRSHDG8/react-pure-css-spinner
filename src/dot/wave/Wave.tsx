import * as React from 'react';
import classNames from './Wave.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const Wave = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDotWave} style={dynamicColor(props.color)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Wave;