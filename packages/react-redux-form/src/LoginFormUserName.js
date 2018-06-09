import Form from "./ReduxFormClass";
const isRequired = true;

const usernameFields = [
  {
    name: "username",
    type: "text",
    label: "Username",
    isRequired
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    isRequired
  }
];
const LoginForm = new Form("loginFormUserName", usernameFields, {});
LoginForm.button("Login", "btn btn-primary");
export default LoginForm.getComponent();
