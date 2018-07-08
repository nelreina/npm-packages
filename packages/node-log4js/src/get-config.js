module.exports = (category = 'default', options = {}) => {
  const config = {};
  let console = true;
  let file = false;
  config.appenders = {};
  config.appenders.console = { type: 'console' };
  config.categories = {};
  if (category !== 'default') {
    config.categories.default = { appenders: ['console'], level: 'trace' };
  }
  config.categories[category] = {};
  config.categories[category].appenders = [];
  config.categories[category].level = 'trace';
  if ('console' in options) {
    console = options.console;
  }
  if ('file' in options) {
    file = options.file;
  }
  if (console) {
    config.categories[category].appenders.push('console');
  }
  if (file) {
    config.appenders.file = { type: 'file', filename: `${category}.log` };
    config.categories[category].appenders.push('file');
  }
  return config;
};
