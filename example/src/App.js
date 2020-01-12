import React, { Component } from 'react'
import './App.css';
import Spinner, { SpinnerType } from 'react-pure-css-spinner';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { ChromePicker } from 'react-color';

SyntaxHighlighter.registerLanguage('jsx', jsx);
export default class App extends Component {
  state = {
    spinnerType: '',
    hexColor: 'rgba(128,0,128,1)',
    color: {
      r: "128",
      g: "0",
      b: "128",
      a: "1"
    }
  }
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange(color) {
    this.setState({ color: color, hexColor: this.buildColor(color.rgb) });
  }
  buildColor(rgba) {
    return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
  }
  render() {
    return (
      <div className="main-container">
        <div className="split left">
          <table className="loader-container">
            <tbody>
              <tr className="row">
                <td className="loader" onClick={() => this.setState({ spinnerType: null })}>
                  <div className="loader-name" >
                    Default
                  </div>
                  <div className="loader-content" style={{ marginLeft: "-79px" }}>
                    <Spinner color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.DotDefault" })}>
                  <div className="loader-name">
                    Dot default
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.DotDefault} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.DotRoller" })}>
                  <div className="loader-name">
                    Dot Roller
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.DotRoller} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.DotRollerOverlay" })}>
                  <div className="loader-name">
                    Dot Roller Overlay
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.DotRollerOverlay} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.SingleCirclePulse" })}>
                  <div className="loader-name">
                    Single Circle Pulse
                  </div>
                  <div className="loader-content" style={{ marginTop: "17px" }}>
                    <Spinner type={SpinnerType.SingleCirclePulse} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.MultipleCirclePulse" })}>
                  <div className="loader-name">
                    Multi Circle Pulse
                  </div>
                  <div className="loader-content" style={{ marginLeft: "-52px", marginTop: "28px" }}>
                    <Spinner type={SpinnerType.MultipleCirclePulse} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.SingleCircleFade" })}>
                  <div className="loader-name">
                    Single Circle Fade
                  </div>
                  <div className="loader-content" style={{ marginTop: "15px" }}>
                    <Spinner type={SpinnerType.SingleCircleFade} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.MultipleCircleFade" })}>
                  <div className="loader-name">
                    Multi Circle Fade
                  </div>
                  <div className="loader-content" style={{ marginTop: "32px" }}>
                    <Spinner type={SpinnerType.MultipleCircleFade} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.Classic" })}>
                  <div className="loader-name">
                    Dot Pulse
                  </div>
                  <div className="loader-content" style={{ marginTop: "37px" }}>
                    <Spinner type={SpinnerType.DotPulse} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.DotWave" })}>
                  <div className="loader-name">
                    Dot Wave
                  </div>
                  <div className="loader-content" style={{ marginTop: "37px" }}>
                    <Spinner type={SpinnerType.DotWave} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.DotOscillate" })}>
                  <div className="loader-name">
                    Dot Oscillate
                  </div>
                  <div className="loader-content" style={{ marginTop: "37px" }}>
                    <Spinner type={SpinnerType.DotOscillate} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.SimpleBar" })}>
                  <div className="loader-name">
                    Simple Bar
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.SimpleBar} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.NestSpinner" })}>
                  <div className="loader-name">
                    Nest Spinner
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.NestSpinner} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.YingYang" })}>
                  <div className="loader-name">
                    Ying Yang
                  </div>
                  <div className="loader-content">
                    <Spinner type={SpinnerType.YingYang} color={this.state.hexColor} />
                  </div>
                </td>
                <td className="loader" onClick={() => this.setState({ spinnerType: "SpinnerType.Classic" })}>
                  <div className="loader-name">
                    Classic
                  </div>
                  <div className="loader-content" style={{ marginTop: "10px" }}>
                    <Spinner type={SpinnerType.Classic} color={this.state.hexColor} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="split right">
          <div className="code-block">
            <SyntaxHighlighter language="javascript" style={dark}>
              {`<Spinner${this.state.spinnerType ? " type={" + this.state.spinnerType + "}" : ""} color="${this.state.hexColor}" />`}
            </SyntaxHighlighter>
            <ChromePicker color={this.state.color} onChange={this.handleColorChange} />
          </div>
        </div>
      </div>
    )
  }
}