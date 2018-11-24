require('dotenv').config();
const log4js = require('@nelreina/node-log4js');
const servicebus = require('@nelreina/node-servicebus');
const { mssqlConn, invokeSQLCmd: Q } = require('@nelreina/node-sequelize');
const CronJob = require('cron').CronJob;

const logger = log4js('bin', { nelmq: 'log.bin', console: false });
const mssql = mssqlConn(logger);
const bus = servicebus({ package: true });

bus.subscribe('log.bin', evt => console.info(evt));

let count = 0;
const sql = 'select aantal= count(*) from columnDef';

const sendCron = async () => {
  const data = await Q(mssql, sql, true);
  // logger.trace(data);
  const payload = Object.assign({}, data, { counter: ++count });
  logger.trace(payload);
};

new CronJob(
  '*/2 * * * * *',
  sendCron,
  // () => ,
  null,
  true
);
// new CronJob(
//   '*/10 * * * * *',
//   () => logger.info('log'),
//   // () => ,
//   null,
//   true
// );