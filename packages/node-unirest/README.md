# @nelreina/node-unirest

A promisified unirest for simple JSON or Xml api calls

```javascript
const unirest = require('@nelreina/node-unirest');
const url = 'http://some/api';
const response = await unirest('GET', url);

// POST Method
const method = 'POST';
const url = 'http://some/api';
const options = {
  body: {},
  headres: {},
  contentType: 'json or xml', // default json,
  timeout: 20000, //in miliseconds - default 30 sec
  query: {}
}
const response = await unirest(method, url, options);
```
