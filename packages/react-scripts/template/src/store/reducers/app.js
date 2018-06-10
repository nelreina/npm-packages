import { assign } from 'lodash';

const FETCHING = 'FETCHING_SETTINGS';
const FETCH_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
const FETCH_ERROR = 'FETCH_SETTINGS_ERROR';

const initialState = { settings: {} };

export const fetchSettings = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCHING });
  try {
    const payload = await api.get('/interface/settings');
    dispatch({
      type: FETCH_SUCCESS,
      payload
    });
    return true;
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: error
    });
    return false;
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SUCCESS:
      return assign({}, state, {
        error: false,
        fetching: false,
        settings: payload
      });
    case FETCHING:
      return assign({}, state, { error: false, fetching: true, settings: {} });
    case FETCH_ERROR:
      return assign({}, state, { error: true, message: payload, settings: {} });

    default:
      return state;
  }
};
