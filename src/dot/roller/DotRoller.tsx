import * as React from 'react';
import classNames from './DotRoller.css';
import { dynamicColor } from '../../util/CssUtils';
import { SpinnerProp } from '../../util/SpinnerProp';
const DotRoller = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDotRoller} style={dynamicColor(props.color)}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
export default DotRoller;