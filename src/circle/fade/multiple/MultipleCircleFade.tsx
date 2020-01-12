import * as React from 'react';
import classNames from './MultipleCircleFade.css';
import { dynamicColor } from '../../../util/CssUtils';
import { SpinnerProp } from '../../../util/SpinnerProp';
const MultipleCircleFade = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsMultipleCircleFade} style={dynamicColor(props.color)}>
            <div />
            <div />
            <div />
        </div>
    )
}
export default MultipleCircleFade;