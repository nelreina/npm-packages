import React from 'react';
import { Table, THead, TBody, TR, MLTH, TD } from './styled-bootstrap';
import accounting from 'accounting';
import { each } from 'lodash';

const getTableHeaders = (array, ignore) => {
  let headers = [];
  array.forEach((item, indx) => {
    const h = Object.keys(item);
    if (indx === 0) {
      headers = h;
    }
    each(h, key => {
      if (headers.indexOf(key) === -1) {
        headers.push(key);
      }
    });
  });
  headers = headers.filter(el => ignore.indexOf(el) < 0);
  return headers;
};

const formatAmount = (data, options) => {
  if (options && options.type) {
    return options.type === 'amount'
      ? accounting.formatMoney(data, options.format || '')
      : data;
  } else {
    return data;
  }
};

const TableCell = ({ data, options }) => (
  <TD {...options}>{formatAmount(data, options)}</TD>
);

const UiDynamicTable = ({
  data,
  ignoreHeaders = [],
  actions,
  colOptions = {}
}) => {
  if (data.length === 0) {
    return <p>No data to display</p>;
  }
  const headers = data ? getTableHeaders(data, ignoreHeaders) : [];
  return (
    <Table collapsing compact celled selectable size="small">
      <THead>
        <TR>
          {actions && <MLTH />}
          {headers.map((hd, idx) => (
            <MLTH options={{ ...colOptions[hd] }} key={idx} item={hd} />
          ))}
        </TR>
      </THead>
      <TBody>
        {data &&
          data.map((tr, ri) => (
            <TR key={ri}>
              {headers.map((th, ci) => (
                <TableCell key={ci} options={colOptions[th]} data={tr[th]} />
              ))}
            </TR>
          ))}
      </TBody>
    </Table>
  );
};

export default UiDynamicTable;
