import Form from "./ReduxFormClass";
const isRequired = true;

const emailFields = {
  email: {
    type: "email",
    label: "Email Address",
    isRequired
  },
  password: {
    type: "password",
    label: "Password",
    isRequired
  }
};
const LoginForm = new Form("loginFormEmail", emailFields, {});
LoginForm.button("Login", "btn btn-primary");
export default LoginForm.getComponent();
