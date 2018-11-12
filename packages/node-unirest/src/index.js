const unirest = require('unirest');
const parser = require('xml2json');
const xmlBuilder = require('./xml-builder');
const S = require('string');

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
      method,
      query,
      body,
      contentType,
      headers = {},
      timeout = 30000,
      cookies
    } = options;
    const requestHeaders = titleCaseHeaders(headers);
    let req;

    if (cookies) {
      cookies.split(';').forEach(cookie => CookieJar.add(cookie, '/'));
      req = unirest(method || 'GET', url).jar(CookieJar);
    } else {
      req = unirest(method || 'GET', url);
    }

    if (query) {
      req.query(query);
    }

    if (timeout) {
      req.timeout(timeout);
    }

    if (method === 'POST') {
      if (!body) return reject({ message: 'You must provide a body' });
      let postData = body;
      let postDataLength = JSON.stringify(body).length;
      if (contentType === 'xml') {
        postData = xmlBuilder(body);
        postDataLength = postData.length;
      }
      requestHeaders['Content-Length'] = postDataLength;
      req.type(contentType || 'json');
      req.send(postData);
    }

    req.headers(requestHeaders);
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
