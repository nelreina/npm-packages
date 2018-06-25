import React from 'react';

const FieldText = ({ label, input }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}

      <input
        className="form-control-plaintext"
        type="text"
        readonly
        disabled
        {...input}
      />
    </div>
  );
};

export default FieldText;
