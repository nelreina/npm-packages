import React from "react";
import { connect } from "react-redux";

const FieldRadio = ({ options, input, type, form, formname, ...rest }) => {
  const { name } = input;
  const formValues = form[formname].values || {};
  return options.map(opt => (
    <div className="form-check form-check-inline" key={opt.value}>
      <input
        {...input}
        id={opt.label}
        className="form-check-input"
        type={type}
        value={opt.value}
        checked={formValues[name] === opt.value.toString()}
      />
      <label htmlFor={opt.label} className="form-check-label">
        {opt.label}
      </label>
      {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
    </div>
  ));
};

export default connect(state => ({ form: state.form }))(FieldRadio);
