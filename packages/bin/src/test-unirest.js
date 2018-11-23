const unirest = require('@nelreina/node-unirest');
const log4js = require('@nelreina/node-log4js');

const logger = log4js('unirest');
(async () => {
  let ret;
  ret = await unirest('http://localhost:8000/ping', {
    method: 'POST'
  });
  logger.info(`Response simple POST: ${ret}`);

  ret = await unirest(
    'http://localhost:8000/ping',
    {
      method: 'POST',
      contentType: 'form',
      body: 'SCREEN=LANGUAGE'
      // delimiter: ';'
    },
    false
  );
  logger.info(`Response Form POST: ${JSON.stringify(ret)}`);
})().catch(err => logger.error(err.message));
