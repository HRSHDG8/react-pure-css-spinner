import React from 'react';
import './DotRoller.css';
const DotRoller = (props) => {
    return (
        <div class="lds-roller" style={{"--main-color":props.color}}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}
export default DotRoller;