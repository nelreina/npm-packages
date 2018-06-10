import { assign } from 'lodash';

const FETCHING = '[app] fetching-github';
const FETCH_SUCCESS = '[app] fetched-github-with-success';
const FETCH_ERROR = '[app] fetch-github-failed';

const initialState = { data: [] };

export const fetchCommits = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCHING });
  try {
    const payload = await api.get('/commits');
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
        data: payload
      });
    case FETCHING:
      return assign({}, state, { error: false, fetching: true, data: [] });
    case FETCH_ERROR:
      return assign({}, state, { error: true, message: payload, data: [] });

    default:
      return state;
  }
};
