import { ReduxFormClass as Form } from "../../../src";

const isRequired = true;
const options = [{ value: 1, label: "One" }, { value: 2, label: "Two" }];
const fields = {
  textInput: { label: "Text Input" },
  emailInput: { type: "email", label: "Email Input" },
  rangeInput: { type: "range", label: "Range Input" },
  selectInput: { type: "select", label: "Select Input", options },
  textareaInput: { type: "textarea", label: "TextArea Input" },
  checkboxInput: { type: "checkbox", label: "Check Box" },
  radioInput: { type: "radio", label: "Radio Input", options }
};

const SupportedInputType = new Form("SupportedInputType", fields)
  .button(null, "btn btn-dark btn-block")
  .getComponent();
export default SupportedInputType;
