const getConfig = require('../src/get-config');
const urllogstash = 'http://localhost:9201';
const consoleConfig = {
  appenders: {
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' }
  }
};
const fileConfig = {
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'app.log' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    app: { appenders: ['file'], level: 'trace' }
  }
};
const logstashConfig = {
  appenders: {
    console: { type: 'console' },
    logstash: {
      type: '@log4js-node/logstash-http',
      url: urllogstash,
      application: 'app'
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    app: { appenders: ['console', 'logstash'], level: 'trace' }
  }
};
const fileAndConsoleConfig = {
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'app.log' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' },
    app: { appenders: ['console', 'file'], level: 'trace' }
  }
};

describe('Get log4js configuration', () => {
  test('should return console config with no arguments', () => {
    expect(getConfig()).toEqual(consoleConfig);
  });
  test('should return file config no console', () => {
    expect(getConfig('app', { console: false, file: true })).toEqual(
      fileConfig
    );
  });
  test('should return file config', () => {
    expect(getConfig('app', { file: true })).toEqual(fileAndConsoleConfig);
  });
  test('should return logstashsearch config with url', () => {
    expect(getConfig('app', { logstash: urllogstash })).toEqual(logstashConfig);
  });
  test('should return logstashsearch config with boolean', () => {
    expect(getConfig('app', { logstash: true })).toEqual(logstashConfig);
  });
});
