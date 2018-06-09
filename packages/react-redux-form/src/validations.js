import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import S from "string";
S.extendPrototype();
import { humanize } from "./util";

export const getMessage = ({ name, label, value, template }) => {
  const showLabel = template.contains("${label}");
  let labelName, text;
  if (showLabel) {
    text = template.replace("${label}", "${labelName}");
    labelName = label || humanize(name);
  } else {
    text = template;
  }
  return {
    [name]: text.template({ name, labelName, value }, "${", "}")
  };
};

export const checkRequiredFields = (value, config, name, cf) => {
  if (config.isRequired && (!value || value.trim() === "")) {
    const template = "${label} is required";
    return getMessage({ name, template });
  } else {
    return undefined;
  }
};
export const checkType = (value, config, name) => {
  if (value) {
    const { label } = config;
    switch (config.type) {
      case "email":
        return !isEmail(value.toString())
          ? getMessage({ name, label, template: "Not valid email address" })
          : undefined;
      case "twitter":
        return !S(value).startsWith("@")
          ? getMessage({
              name,
              label,
              template: "Not valid twitter handle. Name must start with a @"
            })
          : undefined;
      default:
        return undefined;
    }
  }
};
export const checkMinLength = (value, config, name) => {
  if (config.minLength && value) {
    const min = config.minLength;
    if (!isLength(value.toString() || "", { min })) {
      const { label } = config;
      const template = "${label} must be ${value} characters or more";
      return getMessage({ name, label, value: min, template });
    }
  } else {
    return undefined;
  }
};
export const checkMaxLength = (value, config, name) => {
  if (config.maxLength && value) {
    const max = config.maxLength;
    if (!isLength(value.toString(), { max })) {
      const { label } = config;
      const template = "${label} must be ${value} characters or less";
      return getMessage({ name, label, value: max, template });
    }
  }
};
export const checkIsEqual = (values, value, config, name) => {
  if (config.equals && value) {
    // debugger;
    if (values[config.equals] !== value) {
      const { label } = config;
      const template = "${label} must be equal to ${value}";
      return getMessage({ name, label, value: config.equals, template });
    }
  }
};
