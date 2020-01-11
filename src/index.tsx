import * as React from 'react';
import YingYang from './ying-yang/YingYang';
import { SpinnerType } from './spinner.type';
import Default from './default/Default';
import DotRoller from './dot/roller/DotRoller';
import DotDefault from './dot/default/DotDefault';
import NestSpinner from './nest/NestSpinner';
import SimpleBar from './bars/simple-bars/SimpleBar';
import DotRollerOverlay from './dot/roller-overlay/RollerOverlay';
import Wave from './dot/wave/Wave';
import Pulse from './dot/pulse/Pulse';
import Oscillation from './dot/oscillation/Oscillation';
export * from './spinner.type';
export type Props = { color?: string, type?: SpinnerType }
function ReactCssSpinner(props: Props) {
  let color = "black";
  if (props.color) {
    color = props.color;
  }
  switch (props.type) {
    case SpinnerType.YingYang:
      return <YingYang color={color} />
    case SpinnerType.DotRoller:
      return <DotRoller color={color} />
    case SpinnerType.DotDefault:
      return <DotDefault color={color} />
    case SpinnerType.DotRollerOverlay:
      return <DotRollerOverlay color={color} />
    case SpinnerType.DotWave:
      return <Wave color={color} />
    case SpinnerType.DotPulse:
      return <Pulse color={color} />
    case SpinnerType.DotOscillate:
      return <Oscillation color={color} />
    case SpinnerType.NestSpinner:
      return <NestSpinner color={color} />
    case SpinnerType.SimpleBar:
      return <SimpleBar color={color} />
    default:
      return <Default color={color} />;
  }
}
export default ReactCssSpinner;
