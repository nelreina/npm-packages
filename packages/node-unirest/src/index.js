const unirest = require('unirest');
const parser = require('xml2json');
const S = require('string');
const qs = require('qs');

const xmlBuilder = require('./xml-builder');

const CookieJar = unirest.jar();

const titleCaseHeaders = headers => {
  const ret = {};
  Object.keys(headers).forEach(
    key => (ret[S(key).titleCase().s] = headers[key])
  );
  return ret;
};

module.exports = (url, options = {}, returnBody = true) =>
  new Promise((resolve, reject) => {
    const {
      method = 'GET',
      query,
      body = '',
      contentType = 'json',
      headers = {},
      timeout = 30000,
      cookies,
      delimiter = '&'
    } = options;
    const requestHeaders = titleCaseHeaders(headers);
    let req;

    if (cookies) {
      cookies.split(';').forEach(cookie => CookieJar.add(cookie, '/'));
      req = unirest(method, url).jar(CookieJar);
    } else {
      req = unirest(method, url);
    }

    if (query) {
      req.query(query);
    }

    if (timeout) {
      req.timeout(timeout);
    }

    if (method === 'POST' || method === 'PUT') {
      let postData = body;
      switch (contentType) {
        case 'xml':
          postData = xmlBuilder(postData);
          requestHeaders['Content-Length'] = postData.length;
          break;
        case 'form':
          const spaces = postData.split(' ').length - 1;
          requestHeaders['Content-Length'] = postData.length + spaces * 2;
          postData = qs.parse(postData, { delimiter });
          console.info(postData);
          break;
        case 'json':
          requestHeaders['Content-Length'] = JSON.stringify(postData).length;
          break;
        default:
          requestHeaders['Content-Length'] = postData.length;
          break;
      }
      req.type(contentType);
      req.headers(requestHeaders);
      if (contentType === 'form') {
        req.form(postData);
      } else {
        req.send(postData);
      }
    }

    req.end(res => {
      if (res.error) reject(res.error);
      let resp;
      if (returnBody) {
        resp = res.body;
        if (contentType === 'xml' && !S(resp).isEmpty()) {
          resp = JSON.parse(parser.toJson(resp));
        }
      } else {
        resp = res;
      }
      resolve(resp);
    });
  });
