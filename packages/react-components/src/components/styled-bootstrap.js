import React, { Fragment } from 'react';
import { times } from 'lodash';
import S from 'string';

import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container'
})``;
export const Table = styled.table.attrs({
  className: 'table table-sm table-hover'
})`
  font-size: 0.8em;
`;
export const THead = styled.thead.attrs({
  className: ''
})``;
export const TBody = styled.tbody.attrs({
  className: ''
})``;
export const TR = styled.tr.attrs({})`
  ${props => props.pointer && 'cursor: pointer'};
`;
export const THP = styled.span.attrs({})`
  display: block;
`;
export const TH = styled.th.attrs({})`
  ${props => props.nowrap && 'white-space: nowrap'};
  ${props => props.center && 'text-align: center'};
  ${props => props.right && 'text-align: right'};
  ${props => props.br && 'border-right: solid 1px #bbb'};
`;
export const TD = styled.td.attrs({})`
  ${props => props.right && 'text-align: right'};
  ${props => props.center && 'text-align: center'};
  ${props => props.nowrap && 'white-space: nowrap'};
`;
export const ListUnstyled = styled.ul.attrs({ className: 'list-unstyled' })`
  font-size: 0.9em;
`;
export const ListItem = styled.li.attrs({})`
  display: grid;
  ${props =>
    props.gtc
      ? `grid-template-columns:${props.gtc}`
      : 'grid-template-columns: 1fr 1fr'};
  grid-template-columns: ${props => (props.gtc ? props.gtc : '1fr 1fr')};
`;
const BoxWrapper = styled.div.attrs({})`
  ${props => props.white && !props.backdrop && 'background: #fff'};
  padding: 1em;
`;
export const BoxTitle = styled.h5`
  text-align: center;
`;

export const Box = ({ backdrop, white, title, children }) => (
  <BoxWrapper backdrop={backdrop} white={white}>
    {title && <BoxTitle>{title}</BoxTitle>}
    {children}
  </BoxWrapper>
);
export const CheckBox = styled.input.attrs({
  className: 'form-control',
  type: 'checkbox'
})``;

export const RowTD = styled.td.attrs({})`
  color: #0065ff;
  font-weight: bold;
  ${props => props.pointer && 'cursor: pointer'};
`;

export const ErrorMessage = styled.pre.attrs({
  className: 'alert alert-danger'
})``;

export const MLTH = ({ item, rc = 3, options }) => {
  const part = item.split(' ');
  return (
    <Fragment>
      <TH {...options}>
        {times(rc, nr => (
          <THP key={nr}>{part[nr] && S(part[nr]).replaceAll('_', ' ').s}</THP>
        ))}
      </TH>
    </Fragment>
  );
};

export const dummy = 'dummy';
