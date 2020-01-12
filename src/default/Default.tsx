import * as React from 'react';
import classNames from './DefaultCss.css';
import { SpinnerProp } from '../util/SpinnerProp';
const Default = (props: SpinnerProp) => {
    return (
        <div className={classNames.pcsDedault}>
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
        </div>
    )
}
export default Default;