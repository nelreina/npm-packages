# @nelreina/node-unirest

A promisified unirest for SIMPLE JSON or Xml api calls

### Example

```javascript
// GET Method
const unirest = require('@nelreina/node-unirest');
const url = 'http://some/api';
const response = await unirest('GET', url);

// POST/ PUT  Method
const method = 'POST';
const url = 'http://some/api';
const options = {
  body: '<body></body>',
  headres: {},
  contentType: 'xml', // default json / Options: xml/ text/ json/
  timeout: 20000, //in miliseconds - default 30 sec
  query: {}
}
const response = await unirest(method, url, options);
```

### Simple

If you need more advanced feature (e.g. form multipart) please use the unirest library directly
This library only handles simple / most common use API calls.
