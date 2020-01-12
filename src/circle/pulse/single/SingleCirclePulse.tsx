import * as React from 'react';
import classNames from './SingleCirclePulse.css';
import { dynamicColor } from '../../../util/CssUtils';
import { SpinnerProp } from '../../../util/SpinnerProp';
const SingleCirclePulse = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsSingleCirclePulse} style={dynamicColor(props.color)}>
            <div />
        </div>
    )
}
export default SingleCirclePulse;