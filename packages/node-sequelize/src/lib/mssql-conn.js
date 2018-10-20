require('dotenv').config();
const Sequelize = require('sequelize');

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_INTEGRATED = process.env.DB_INTEGRATED;

module.exports = (dbName, logger = console) => {
  if (!DB_INTEGRATED) {
    logger.error('env variable DB_INTEGRATED is required!');
    throw new Error('ERR: env variable DB_INTEGRATED is required!');
  }
  const DB_NAME = dbName || process.env.DB_NAME;

  const trustedConn = `Server=${DB_HOST};Database=${DB_NAME};Trusted_Connection=yes;`;
  const authConn = `Server=${DB_HOST};Database=${DB_NAME};Username:${DB_USERNAME};`;

  const integrated = DB_INTEGRATED === 'Y';
  logger.info('mssql connection', integrated ? trustedConn : authConn);
  const conn = {};
  conn['dialect'] = 'mssql';
  conn['operatorsAliases'] = false;
  conn['logging'] = false;
  if (!integrated) {
    conn['username'] = DB_USERNAME;
    conn['password'] = DB_PASSWORD;
    conn['database'] = DB_NAME;
    conn['host'] = DB_HOST;
    conn['dialectOptions'] = {
      encrypt: true,
      requestTimeout: 0,
      connectionTimeout: 9999999999
    };
    if (DB_PORT) {
      conn['port'] = DB_PORT;
    }
  } else {
    conn['dialectModulePath'] = 'sequelize-msnodesqlv8';
    conn['dialectOptions'] = { connectionString: trustedConn };
  }
  return new Sequelize(conn);
};
