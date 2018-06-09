import React from "react";
import List from "nr-react-list";
import { connect } from "react-redux";
import { get, isArray } from "lodash";
import { css } from "emotion";
import { change as fieldChange } from "redux-form";

import getInputClass from "./get-input-class";
import Options from "./FieldSelectOption";

const hidden = css``;

const FieldSelect = ({
  options,
  reduxstate,
  optionsKey,
  stateOptions,
  form,
  formname,
  info,
  input,
  meta,
  label,
  resetOnChange,
  fieldChange
}) => {
  const { name, onChange } = input;
  let selectOptions;
  if (optionsKey) {
    const key = get(form, `${formname}.values.${optionsKey}`, "");
    if (options) {
      selectOptions = options[key];
    } else if (reduxstate) {
      selectOptions = get(stateOptions, `${reduxstate}.${key}`, []);
      // return reduxstate;
    } else {
      return "No options has been given";
    }
  } else {
    if (options) {
      selectOptions = options;
    } else if (reduxstate) {
      selectOptions = get(stateOptions, reduxstate, {});
      // return reduxstate;
    } else {
      return "No options has been given";
    }
  }
  const selectChange = evt => {
    const { value } = evt.target;
    if (resetOnChange) {
      if (isArray(resetOnChange)) {
        resetOnChange.forEach(fld => fieldChange(formname, fld, ""));
      } else {
        fieldChange(formname, resetOnChange, "");
      }
    }
    onChange(value);
  };
  const noOptions = !selectOptions || selectOptions.length === 0;
  return (
    <div className={["form-group", noOptions ? hidden : ""].join(" ")}>
      {label && <label>{label}</label>}
      <select
        className={getInputClass(meta)}
        disabled={noOptions}
        {...input}
        onChange={selectChange}
      >
        <option value="">Choose a {label || name} </option>
        <List of={Options} iterator={selectOptions} />
      </select>
      {info && <small className="form-text text-muted">{info}</small>}

      <div className="invalid-feedback">{meta.error}</div>
    </div>
  );
};
const msp = state => ({ stateOptions: state, form: state.form });
export default connect(
  msp,
  { fieldChange }
)(FieldSelect);
