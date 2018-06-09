import ReduxForm from "./ReduxFormClass";

export default (name, fields, initValues = {}, buttonText = "Submit") => {
  const form = new ReduxForm(name, fields, initValues);
  form.button(buttonText);
  return form.getComponent();
};
