import * as React from 'react';
import classNames from './Classic.css';
import { SpinnerProp } from '../util/SpinnerProp';
import { dynamicColor } from '../util/CssUtils';
const Classic = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsClassic} style={dynamicColor(props.color)}>
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
export default Classic;