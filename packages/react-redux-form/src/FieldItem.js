import React from "react";
import { Field, FieldArray } from "redux-form";
import RenderField from "./RenderField";
import RenderFieldArray from "./RenderFieldArray";
import { assign } from "lodash";

const FieldItem = props => {
  const { item: field, name, fieldname } = props;
  const inpName = fieldname ? `${fieldname}.${name}` : name;
  const fieldProps = assign({}, field, props, { placeholder: name });
  let item;
  switch (field.type) {
    case "field-array":
      item = (
        <FieldArray
          {...props}
          {...field}
          name={name}
          parent={name}
          component={RenderFieldArray}
        />
      );
      break;

    default:
      item = <Field {...fieldProps} component={RenderField} name={inpName} />;
      break;
  }
  return item;
};

export default FieldItem;
