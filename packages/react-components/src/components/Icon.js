import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const iconClass = props =>
  classnames(
    'fa',
    `fa-${props.name}`,
    { 'fa-spin': props.spin },
    { 'fa-1x': props.small },
    { 'fa-2x': props.medium },
    { 'fa-3x': props.large },
    { 'fa-4x': props.huge }
  );
const FAIcon = styled.i.attrs({
  className: props => iconClass(props)
})`
  ${props => props.marginl && 'margin-left: 0.5em;'};
  ${props => props.marginr && 'margin-right: 0.5em;'};
`;
const Icon = props => {
  return <FAIcon {...props} />;
};

export default Icon;
