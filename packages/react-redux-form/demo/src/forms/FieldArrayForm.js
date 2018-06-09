import { ReduxFormClass as Form } from "../../../src";
import { store } from "../store";
import { get } from "lodash";
const isRequired = true;

const fields = {
  clubName: { isRequired, minLength: 3, maxLength: 10 },
  member: {
    type: "field-array",
    legend: "Members",
    arrayFields: {
      firstName: {},
      lastName: {},
      age: {}
    }
  }
};

const selectClub = state => get(state, "club.data");
const init = store ? selectClub(store.getState()) : {};

const FieldArrayForm = new Form("FieldArrayForm", fields, init)
  .button(null, "btn btn-dark btn-block")
  .getComponent();
export default FieldArrayForm;
