import React from "react";
import S from "string";
import { isString } from "lodash";

import FieldText from "./Bootstrap/FieldText";
import FieldTextArea from "./Bootstrap/FieldTextArea";
import FieldSelect from "./Bootstrap/FieldSelect";
import FieldCheck from "./Bootstrap/FieldCheck";
import FieldRadio from "./Bootstrap/FieldRadio";

S.extendPrototype();

export const getInputType = (type, props) => {
  switch (type) {
    case "select":
      return <FieldSelect {...props} />;
    case "textarea":
      return <FieldTextArea {...props} />;
    case "checkbox":
      return <FieldCheck type={type} {...props} />;
    case "radio":
      return <FieldRadio type={type} {...props} />;
    default:
      return <FieldText type={type} {...props} />;
  }
};

export const humanize = text => isString(text) && text.humanize().titleCase();
