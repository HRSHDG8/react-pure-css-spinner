import * as React from 'react';
import classNames from './SingleCircleFade.css';
import { dynamicColor } from '../../../util/CssUtils';
import { SpinnerProp } from '../../../util/SpinnerProp';
const SingleCircleFade = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsSingleCircleFade} style={dynamicColor(props.color)}>
            <div />
        </div>
    )
}
export default SingleCircleFade;