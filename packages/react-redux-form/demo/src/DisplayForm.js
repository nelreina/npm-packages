import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import code from "./sample-code";
import Highlight from "react-highlight";

import AdvancedForm from "./forms/AdvancedForm";
import SimpleForm from "./forms/SimpleForm";
import SignUpForm from "./forms/SignUpForm";
import FieldArrayForm from "./forms/FieldArrayForm";
import AllInputTypeForm from "./forms/AllInputTypeForm";
import SelectOptionsForm from "./forms/SelectOptionsForm";
import FormState from "./FormState";
import { LoginFormEmail, LoginFormUserName } from "../../src";

const Form = ({ comp: Component, action, name }) => (
  <div className="form">
    <div>
      <Component action={action} />
    </div>
    <hr className="divider" />
    <FormState name={name} />
    {code[name] && (
      <Fragment>
        <hr className="divider" />
        <Highlight className="javascript code">{code[name]}</Highlight>
      </Fragment>
    )}
  </div>
);

const DisplayForm = ({ action }) => (
  <Switch>
    <Route
      path="/simple"
      render={props => (
        <Form comp={SimpleForm} action={action} name="SimpleForm" />
      )}
    />
    <Route
      path="/select-form"
      render={props => (
        <Form
          comp={SelectOptionsForm}
          action={action}
          name="SelectOptionsForm"
        />
      )}
    />
    <Route
      path="/advanced-form"
      render={props => (
        <Form comp={AdvancedForm} action={action} name="AdvancedForm" />
      )}
    />
    <Route
      path="/login-form-email"
      render={props => (
        <Form comp={LoginFormEmail} action={action} name="loginFormEmail" />
      )}
    />
    <Route
      path="/login-form-username"
      render={props => (
        <Form
          comp={LoginFormUserName}
          action={action}
          name="loginFormUsername"
        />
      )}
    />
    <Route
      path="/sign-up-form"
      render={props => (
        <Form comp={SignUpForm} action={action} name="SignUpForm" />
      )}
    />
    <Route
      path="/all-input-type"
      render={props => (
        <Form
          comp={AllInputTypeForm}
          action={action}
          name="SupportedInputType"
        />
      )}
    />
    <Route
      path="/field-array-form"
      render={props => (
        <Form comp={FieldArrayForm} action={action} name="FieldArrayForm" />
      )}
    />
    <Route render={() => <h4>Select one of the Forms above</h4>} />
  </Switch>
);

export default DisplayForm;
