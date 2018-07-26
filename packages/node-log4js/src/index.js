const Log4js = require('log4js');
const { isEmpty, isPlainObject } = require('lodash');
const S = require('string');
const getConfig = require('./get-config');

module.exports = (category = 'default', options) => {
  Log4js.addLayout('json', () => logEvent => logEvent);

  if (!options) {
    Log4js.configure(getConfig());
    return Log4js.getLogger();
  }
  if (!isPlainObject(options) || isEmpty(options)) {
    throw new Error('options object cannot be empty');
  }
  if ('configFilename' in options) {
    if (S(options.configFilename).isEmpty()) {
      throw new Error('you must provide a value for options.configFilename!');
    }
    Log4js.configure(options.configFilename);
  } else {
    Log4js.configure(getConfig(category, options));
  }
  return Log4js.getLogger(category);
};
