import * as React from 'react';
import classNames from './NestSpinner.css';
import { dynamicColor } from '../util/CssUtils';
import { SpinnerProp } from '../util/SpinnerProp';
const NestSpinner = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsNestSpinner} style={dynamicColor(props.color)} />
    )
}
export default NestSpinner;