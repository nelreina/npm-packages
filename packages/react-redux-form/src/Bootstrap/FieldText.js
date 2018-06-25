import React from 'react';
import getInputClass from './get-input-class';
import { humanize } from '../util';

const FieldText = ({ meta, label, input, type, placeholder }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}

      <input
        className={getInputClass(meta)}
        placeholder={`${humanize(placeholder)}`}
        type={type}
        {...input}
      />
      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};

export default FieldText;
