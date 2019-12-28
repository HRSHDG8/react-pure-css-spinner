import React from 'react';
import PropTypes from 'prop-types';
import YingYang from './ying-yang/YingYang';
import * as _ from './spinner.type';
import Default from './default/Default';
import DotRoller from './dot/roller/DotRoller';
import DotDefault from './dot/default/DotDefault';
import NestSpinner from './nest/NestSpinner';
import SimpleBar from './bars/simple-bars/SimpleBar';
function ReactCssSpinner(props) {
  let color = "black";
  if (props.color) {
      color = props.color;
  }
  switch (props.type) {
    case _.YIN_YANG:
      return <YingYang color={color} />
    case _.DOT_ROLLER:
      return <DotRoller color={color} />
    case _.DOT_DEFAULT:
      return <DotDefault color={color} />
    case _.NEST_SPINNER:
      return <NestSpinner color={color} />
    case _.SIMPLE_BAR:
    return <SimpleBar color={color}/>
    default:
      return <Default color={color} />;
  }
}
ReactCssSpinner.propTypes = {
  type: PropTypes.oneOf([null, 0, 1, 2, 3, 4]),
  color: PropTypes.string
}
export default ReactCssSpinner;
