import * as React from 'react';
import classNames from './SimpleBar.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const SimpleBar = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsSimpleBar} style={dynamicColor(props.color)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default SimpleBar;