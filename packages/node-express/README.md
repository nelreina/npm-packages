# @nelreina/node-express

Boilerplate Express js with helmet security built in

```javascript
const express = require('@nelreina/node-express');

const options = {
  parseJson: true, // default true - user body-parser json
  secure: true, // default true - add helmet security
  cors: true // default true - use cors
};
const app = express(options);
```
