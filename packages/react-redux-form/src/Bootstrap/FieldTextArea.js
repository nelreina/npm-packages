import React from "react";
import getInputClass from "./get-input-class";
import { humanize } from "../util";

const FieldTextArea = ({ meta, label, input, placeholder }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <textarea
        className={getInputClass(meta)}
        placeholder={`${humanize(placeholder)}`}
        {...input}
        rows="4"
      />

      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};

export default FieldTextArea;
