import { get as apiGet } from '@nelreina/web-api';
import { useEffect, useState } from 'react';
import { isEmpty, get } from 'lodash';

export default (url, initialValue = [], options = {}) => {
  if (!url) throw new Error('URL is required!');
  const { jsonpath, localKey } = options;
  let initData = initialValue;
  const ret = {};
  if (localKey) {
    initData = JSON.parse(localStorage.getItem(localKey));
  }
  const [data, setData] = useState(initData);
  const [loading, setLoading] = useState(true);
  useEffect(
    async () => {
      console.info({ localKey }, { data });
      if (isEmpty(data)) {
        let json = await apiGet(url);
        if (jsonpath) {
          json = get(json, jsonpath, null);
        }
        setLoading(false);
        setData(json);
        if (localKey) {
          localStorage.setItem(localKey, JSON.stringify(json));
        }
      } else {
        setLoading(false);
      }
    },
    [data]
  );

  ret['loading'] = loading;
  ret['data'] = data;
  return ret;
};
