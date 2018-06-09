import { ReduxFormClass as Form } from "../../../src";

const isRequired = true;

const fields = {
  userName: { isRequired, minLength: 3, maxLength: 10 },
  firstName: { isRequired },
  lastName: { isRequired },
  email: { type: "email", isRequired },
  twitter: { type: "twitter", label: "Twitter Handle" }
};

const SimpleForm = new Form("SimpleForm", fields)
  .button("Simple", "btn btn-dark btn-block")
  .getComponent();
export default SimpleForm;
