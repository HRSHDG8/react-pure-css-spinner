import React from 'react';
import './YingYang.css';
const YingYang = (props) => {
    let color = "black";
    if (props.color) {
        color = props.color;
    }
    return (
        <div className="yy-container">
            <div className="pcs-ying-yang-spinner" style={{ "--main-color": color }} />
        </div>
    )
}
export default YingYang;