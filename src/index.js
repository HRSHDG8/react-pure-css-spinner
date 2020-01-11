import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactCssSpinner from './ReactCssSpinner';
import * as serviceWorker from './serviceWorker';
import * as _ from './spinner.type';

ReactDOM.render(<div>
    <ReactCssSpinner color="pink" />
    <ReactCssSpinner type={_.SIMPLE_BAR} color="green" />
    <ReactCssSpinner type={_.NEST_SPINNER} color="pink" />
    <ReactCssSpinner type={_.DOT_DEFAULT} color="olive" />
    <ReactCssSpinner type={_.DOT_ROLLER} color="magenta" />
    <ReactCssSpinner type={_.YIN_YANG} color="pink" />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
