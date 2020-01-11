import * as React from 'react';
import classNames from './RollerOverlay.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const DotRollerOverlay = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDotRollerOverLay} >
            <div className={classNames.pcsDot } style={dynamicColor(props.color)} />
            <div className={classNames.pcsDot+ ' '+classNames.pcsD2 } style={dynamicColor(props.color)} />
            <div className={classNames.pcsDot+ ' '+classNames.pcsD3 } style={dynamicColor(props.color)} />
            <div className={classNames.pcsDot+ ' '+classNames.pcsD4 } style={dynamicColor(props.color)} />
            <div className={classNames.pcsDot+ ' '+classNames.pcsD5 } style={dynamicColor(props.color)} />
        </div>
    )
}
export default DotRollerOverlay;