import React from "react";
import { connect } from "react-redux";
import Highlight from "react-highlight";
import { get } from "lodash";

const SubmitResult = ({ form, name }) => {
  const values = get(form, `${name}.values`, {});
  const validationErrors = form[name] && form[name]["syncErrors"];
  return (
    <div className="result">
      <Highlight className="typescript form-state">
        {JSON.stringify({ values }, null, 2)}
      </Highlight>
    </div>
  );
};

export default connect(state => ({ form: state.form }))(SubmitResult);
