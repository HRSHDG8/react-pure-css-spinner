import React from 'react';
import './NestSpinner.css';
const NestSpinner = (props) => {
    return (
        <div className="nest" style={{"--main-color":props.color}}/>
    )
}
export default NestSpinner;