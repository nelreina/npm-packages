import { ReduxFormClass as Form } from "../../../src";

const isRequired = true;

const fields = {
  userName: { isRequired, minLength: 3, maxLength: 10 },
  email: { type: "email", isRequired },
  password: { type: "password", isRequired, minLength: 6 },
  confirmPassword: { type: "password", isRequired, equals: "password" }
};

const init = {
  userName: "nelreina",
  email: "nelreina@gmail.com"
};

const SignUpForm = new Form("SignUpForm", fields, init)
  .button("Sign Up", "btn btn-dark btn-block")
  .getComponent();
export default SignUpForm;
