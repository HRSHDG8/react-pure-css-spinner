import * as React from 'react';
import classNames from './YingYang.css';
import { dynamicColor } from '../util/CssUtils';
import { SpinnerProp } from '../util/SpinnerProp';
const YingYang = (props: SpinnerProp) => {

    return (
        <div className={classNames.yyContainer}>
            <div className={classNames.pcsYingYangSpinner} style={dynamicColor(props.color)} />
        </div>
    )
}
export default YingYang;