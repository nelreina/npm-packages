const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const security = require('./security');
module.exports = (options = { parseJson: true, cors: true, secure: true }) => {
  const app = express();

  app.use(compression());

  if (options.secure) {
    security(app);
  }

  if (options.cors) {
    app.use(cors());
  }

  if (options.parseJson) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }
  app.get('/ping', (req, res) => res.send('post'));
  return app;
};
