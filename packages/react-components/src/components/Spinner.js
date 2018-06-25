import React from 'react';
import Icon from './Icon';
const Spinner = props => {
  let _name;
  switch (true) {
    case props.refresh:
      _name = 'refresh';
      break;
    case props.circle:
      _name = 'circle-o-notch';
      break;
    case props.cog:
      _name = 'cog';
      break;

    default:
      _name = 'spinner';
      break;
  }
  return <Icon {...props} name={_name} />;
};

Spinner.defaultProps = {
  spin: true
};

export default Spinner;
