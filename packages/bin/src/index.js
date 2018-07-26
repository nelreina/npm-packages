require('dotenv').config();
const log4js = require('@nelreina/node-log4js');
const servicebus = require('@nelreina/node-servicebus');
const { mssqlConn, invokeSQLCmd: Q } = require('@nelreina/node-sequelize');
const CronJob = require('cron').CronJob;

const logger = log4js('private');
const mssql = mssqlConn(logger);
const bus = servicebus({ package: true });

let count = 0;
logger.info('Log4js works');

const sql = 'select aantal= count(*) from columnDef';

const sendCron = async () => {
  const data = await Q(mssql, sql, true);
  // logger.trace(data);
  const payload = Object.assign({}, data, { counter: ++count });
  bus.send('test.npm.cron', payload);
};

bus.listen('test.npm.cron', evt => logger.info(JSON.stringify(evt, null, 2)));
new CronJob(
  '*/10 * * * * *',
  sendCron,
  // () => ,
  null,
  true
);
