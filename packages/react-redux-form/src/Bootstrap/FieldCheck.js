import React from "react";

const FieldText = ({ meta, label, input, type }) => {
  const { name } = input;
  return (
    <div className="form-check">
      <input id={name} className="form-check-input" type={type} {...input} />
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default FieldText;
