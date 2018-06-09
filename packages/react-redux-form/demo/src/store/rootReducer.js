import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import club from "./reducers/club";
import os from "./reducers/os";

export default combineReducers({
  form: formReducer,
  club,
  os
});
