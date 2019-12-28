import React from 'react';
import './SimpleBar.css';
const SimpleBar = (props) => {
    return (
        <div className="pcs-simple-bar" style={{"--main-color":props.color}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default SimpleBar;