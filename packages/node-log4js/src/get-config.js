const { isBoolean } = require('lodash');
module.exports = (category = 'default', options = {}) => {
  const config = {};
  let console = true;
  let file = false;
  let logstash = false;
  let mq = false;
  config.appenders = {};
  config.appenders.console = { type: 'console' };
  config.categories = {};

  if (category !== 'default') {
    config.categories.default = { appenders: ['console'], level: 'trace' };
  }
  config.categories[category] = {};
  config.categories[category].appenders = [];
  config.categories[category].level = 'trace';

  if ('console' in options) console = options.console;
  if ('file' in options) file = options.file;
  if ('mq' in options) mq = options.mq;
  if ('logstash' in options) {
    if (!isBoolean(options.logstash)) {
      logstash = options.logstash;
    } else {
      // Default logstashSearch url localhost
      logstash = 'http://localhost:9201';
    }
  }

  if (console) {
    config.categories[category].appenders.push('console');
  }
  if (file) {
    config.appenders.file = { type: 'file', filename: `${category}.log` };
    config.categories[category].appenders.push('file');
  }
  if (mq) {
    config.appenders.mq = { type: '@log4js-node/rabbitmq' };
    config.categories[category].appenders.push('mq');
  }
  if (logstash) {
    config.appenders.logstash = {
      type: '@log4js-node/logstash-http',
      url: logstash,
      application: category
    };
    config.categories[category].appenders.push('logstash');
  }
  return config;
};
