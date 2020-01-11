import React, { Component } from 'react'

import Spinner, { SpinnerType } from 'react-pure-css-spinner';
import Comp from './Comp';
export default class App extends Component {
  render () {
    return (
      <div>
        <Comp/>
        <Spinner color="blue"/>
        <Spinner type={SpinnerType.DotRoller} color="blue"/>
        <Spinner type={SpinnerType.DotRollerOverlay} color="blue"/>
        <Spinner type={SpinnerType.DotDefault} color="blue"/>
        <Spinner type={SpinnerType.YingYang} color="blue"/>
        <Spinner type={SpinnerType.NestSpinner} color="blue"/>
        <Spinner type={SpinnerType.SimpleBar} color="blue"/>
        <Spinner type={SpinnerType.DotOscillate} color="green"/>
        <Spinner type={SpinnerType.DotWave} color="blue"/>
        <Spinner type={SpinnerType.DotPulse} color="green"/>
      </div>
    )
  }
}
