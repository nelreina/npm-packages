import { assign } from "lodash";

const LOGININ = "LOGININ";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const initialState = {
  isAuthenticated: false
};

export const login = cred => async (dispatch, getState, api) => {
  dispatch({ type: LOGININ });
  try {
    const payload = await api.post(`/login`, cred);
    dispatch({
      type: LOGIN_SUCCESS,
      payload
    });
  } catch (error) {
    const payload =
      error.message.indexOf("403") > -1
        ? "Username or Password Incorrect!"
        : error.message;
    dispatch({
      type: LOGIN_ERROR,
      payload
    });
  }
};
export const logout = param => ({
  type: LOGOUT
});

export const actionName = param => ({
  type: type,
  payload: payload
});

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return assign({}, state, {
        error: false,
        inprogress: false,
        message: null,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user
      });
    case LOGININ:
      return assign({}, state, {
        error: false,
        message: null,
        inprogress: true,
        user: {}
      });
    case LOGOUT:
    case LOGIN_ERROR:
      return assign({}, state, {
        error: true,
        message: payload,
        inprogress: false,
        isAuthenticated: false,
        user: {}
      });

    default:
      return state;
  }
};
