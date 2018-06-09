import { ReduxFormClass as Form, validations } from "../../../src";
import { assign } from "lodash";
import S from "string";

const job = ["Developer", "Consultant", "Project Manager"];
const isRequired = true;

const fields = {
  firstName: { type: "text", isRequired, minLength: 3, maxLength: 10 },
  lastName: { type: "text" },
  email: { type: "email", isRequired },
  twitter: { type: "twitter" },
  job: { type: "select", options: job, isRequired },
  yearOfBirth: {
    type: "number",
    label: "Year",
    minLength: 4,
    maxLength: 4,
    minValue: 1900,
    adult: 18
  }
};

const initValues = {
  firstName: "Nelson",
  lastName: "Reina",
  email: "nelreina@gmail.com",
  twitter: "@nelreina",
  job: "Developer",
  yearOfBirth: 1974
};

const { getMessage } = validations;
const validate = (value, config, name) => {
  let checkMinVal = {};
  let checkAdult = {};
  if (config.minValue) {
    const min = config.minValue;
    if (value < min) {
      const { label } = config;
      const template = "${label} must be greather then ${value}";
      checkMinVal = getMessage({ name, label, value: min, template });
    }
  }
  if (config.adult) {
    if (S(value).isNumeric && new Date().getFullYear() - value < 18) {
      const template = "You need to ${value} years or older";
      checkAdult = getMessage({ name, value: config.adult, template });
    }
  }
  return assign({}, checkMinVal, checkAdult);
};

const AdvancedForm = new Form("AdvancedForm", fields, initValues, validate)
  .button("Register", "btn btn-dark btn-block")
  .getComponent();
export default AdvancedForm;
