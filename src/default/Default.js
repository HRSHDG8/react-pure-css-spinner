import React from 'react';
import './Default.css';
const Default = (props) => {
    return (
        <div className="lds-ring">
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }}/>
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }}/>
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }}/>
            <div style={{ borderColor: `${props.color} transparent transparent transparent` }}/>
        </div>
    )
}
export default Default;