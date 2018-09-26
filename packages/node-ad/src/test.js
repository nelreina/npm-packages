const { login } = require('./index');
const Log4js = require('log4js');

Log4js.configure('./log4js.json');
const logger = Log4js.getLogger();

(async () => {
  const ret = await login({ username: 'user', password: '******' });
  console.info(JSON.stringify(ret, null, 2));
})().catch(err => logger.error(`${err}`));
