import { createSelector } from 'reselect';
import { get } from 'lodash';
import S from 'string';
const githubData = state => state.app.data;
const flatResult = data =>
  data
    .map(gh => {
      const ret = {};
      ret['date'] = get(gh, 'commit.committer.date');
      ret['name'] = get(gh, 'commit.committer.name');
      ret['message'] = get(gh, 'commit.message');
      return ret;
    })
    .filter(commit => S(commit.message).contains('react-scripts'));
export const commitsSelector = createSelector(githubData, flatResult);
