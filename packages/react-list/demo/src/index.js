import React, { Component } from "react";
import { render } from "react-dom";
import { assign } from "lodash";
import "./style.css";

import ListItemProp from "./ListItemProp";
import ListCostumPropName from "./ListCostumPropName";
const fieldObject = {
  firstName: {
    type: "text",
    isRequired: true
  },
  lastName: {
    type: "text",
    isRequired: true
  },
  email: {
    type: "email",
    isRequired: true
  }
};
class Demo extends Component {
  render() {
    return (
      <div className="container">
        <h1>@nelreina/react-list Demo</h1>
        <p>Utility Component to render an iterator(Array of objects) </p>
        <ListItemProp />
        <ListCostumPropName />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
