const Log4js = require('log4js');
module.exports = (filename, category = 'default') => {
  Log4js.configure(filename);

  return Log4js.getLogger(category);
};
