import React from "react";
import pt from "prop-types";

import { getInputType } from "./util";
let RenderField = props => getInputType(props.type, props);

export default RenderField;
