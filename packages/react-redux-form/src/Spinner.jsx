import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  padding-right: 1em;
`;

const Spinner = ({ size = '3x' }) => {
  return <Icon className={`fa fa-spinner fa-spin fa-${size} fa-fw`} />;
};

export default Spinner;
