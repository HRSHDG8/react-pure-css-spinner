import * as React from 'react';
import classnames from './DotDefault.css';
import { SpinnerProp } from '../../util/SpinnerProp';
const DotDefault = (props: SpinnerProp) => {
    return (
        <div className={classnames.pcsDotDefault}>
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
            <div style={{ backgroundColor: props.color }} />
        </div>
    )
}
export default DotDefault;