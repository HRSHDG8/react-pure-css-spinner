import * as React from 'react';
import classNames from './MultipleCirclePulse.css';
import { dynamicColor } from '../../../util/CssUtils';
import { SpinnerProp } from '../../../util/SpinnerProp';
const MultipleCirclePulse = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsMultipleCirclePulse} style={dynamicColor(props.color)}>
            <div />
            <div />
            <div />
        </div>
    )
}
export default MultipleCirclePulse;