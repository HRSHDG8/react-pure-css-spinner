import React, { Component } from 'react'
import './App.css';
import Spinner, { SpinnerType } from 'react-pure-css-spinner';
import Comp from './Comp';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
export default class App extends Component {
  state = {
    codeContent: ''
  }
  render() {
    return (
      <div className="main-container">
        <table className="loader-container">
          <tr className="row">
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name" >
                Default
              </div>
              <div className="loader-content" style={{ marginLeft: "-79px" }}>
                <Spinner color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot default
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.DotDefault} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot Roller
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.DotRoller} color="rgba(200,0,255,0.7)" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot Roller Overlay
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.DotRollerOverlay} color="blue" />
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Single Circle Pulse
              </div>
              <div className="loader-content" style={{ marginTop: "17px" }}>
                <Spinner type={SpinnerType.SingleCirclePulse} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Mullt Cirle Pulse
              </div>
              <div className="loader-content" style={{ marginLeft: "-52px", marginTop: "28px" }}>
                <Spinner type={SpinnerType.MultipleCirclePulse} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Single Circle Fade
              </div>
              <div className="loader-content" style={{ marginTop: "15px" }}>
                <Spinner type={SpinnerType.SingleCircleFade} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Multi Circle Fade
              </div>
              <div className="loader-content" style={{ marginTop: "32px" }}>
                <Spinner type={SpinnerType.MultipleCircleFade} color="blue" />
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot Pulse
              </div>
              <div className="loader-content" style={{ marginTop: "37px" }}>
                <Spinner type={SpinnerType.DotPulse} color="green" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot Wave
              </div>
              <div className="loader-content" style={{ marginTop: "37px" }}>
                <Spinner type={SpinnerType.DotWave} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Dot Oscillate
              </div>
              <div className="loader-content" style={{ marginTop: "37px" }}>
                <Spinner type={SpinnerType.DotOscillate} color="green" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Simple Bar
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.SimpleBar} color="blue" />
              </div>
            </td>
          </tr>
          <tr className="row">
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Nest Spinner
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.NestSpinner} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Ying Yang
              </div>
              <div className="loader-content">
                <Spinner type={SpinnerType.YingYang} color="blue" />
              </div>
            </td>
            <td className="loader" onClick={() => this.setState({ codeContent: '<Spinner color="blue" />' })}>
              <div className="loader-name">
                Classic
              </div>
              <div className="loader-content" style={{ marginTop: "10px" }}>
                <Spinner type={SpinnerType.Classic} color="blue" />
              </div>
            </td>
            <td></td>
          </tr>
        </table>
        <div className="code-block">
          <SyntaxHighlighter language="javascript" style={dark}>
            {this.state.codeContent}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  }
}