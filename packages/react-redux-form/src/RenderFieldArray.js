import React from 'react';
import List from '@nelreina/react-list';
import { css } from 'emotion';
import { keys } from 'lodash';
import FieldItem from './FieldItem';

const getCssFieldInput = col => `
flex-basis: 90%;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(${col}, 1fr);
`;

const cssFieldRow = css`
  display: flex;
  justify-content: space-between;
`;
const cssFieldRowButton = css`
  flex-basis: 5%;
  align-self: flex-start;
`;

const RenderFieldArray = props => {
  const {
    arrayFields,
    fields,
    parent,
    legend,
    addField = true,
    removeField = true
  } = props;
  const cssFieldInput = css`
    ${getCssFieldInput(keys(arrayFields).length)};
  `;
  return (
    <div
      className={css`
        margin-bottom: 1em;
      `}
    >
      <legend>{legend}</legend>
      <div
        className={css`
          padding: 1em 0.5em;
          border: 1px #dddddd solid;
          border-radius: 0.5em;
        `}
      >
        {fields.map((fieldname, idx) => {
          return (
            <div className={cssFieldRow} key={idx}>
              <div className={cssFieldInput}>
                <List
                  {...props}
                  of={FieldItem}
                  iterator={arrayFields}
                  keyname="name"
                  fieldname={fieldname}
                />
              </div>

              {removeField && (
                <button
                  className={[cssFieldRowButton, 'btn', 'btn-danger'].join(' ')}
                  onClick={() => fields.remove(idx)}
                >
                  -
                </button>
              )}
            </div>
          );
        })}
        {addField && (
          <button className="btn btn-light" onClick={() => fields.push()}>
            + {parent}
          </button>
        )}
      </div>
    </div>
  );
};

export default RenderFieldArray;
