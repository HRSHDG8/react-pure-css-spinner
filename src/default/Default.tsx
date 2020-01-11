import * as React from 'react';
import styles from './DefaultCss.css';
import { SpinnerProp } from '../util/SpinnerProp';
const Default = (props: SpinnerProp) => {
    return (
        <div className={styles.pcsDedault}>
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }} />
        </div>
    )
}
export default Default;