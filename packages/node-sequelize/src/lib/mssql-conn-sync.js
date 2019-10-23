require('dotenv').config();
const Sequelize = require('sequelize');

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const pool = {
  max: parseInt(process.env.DB_POOL_MAX, 0) || 10,
  min: parseInt(process.env.DB_POOL_MIN, 0) || 0,
  idle: parseInt(process.env.DB_POOL_IDLE, 0) || 20000,
  acquire: parseInt(process.env.DB_POOL_ACQUIRE, 0) || 20000
};
module.exports = (dbName, logger = console) => {
  const DB_NAME = dbName || process.env.DB_NAME;

  const authConn = `Server=${DB_HOST};Database=${DB_NAME};Username:${DB_USERNAME};`;

  logger.info('mssql connection', authConn);
  const conn = {};
  conn['dialect'] = 'mssql';
  conn['operatorsAliases'] = false;
  conn['logging'] = false;

  const dialectOptions = {
    encrypt: true,
    requestTimeout: parseInt(process.env.DB_REQUEST_TIMEOUT, 0) || 0,
    connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT, 0) || 0
  };

  const options = {
    host: DB_HOST,
    dialect: 'mssql',
    operatorsAliases: false,
    pool,
    dialectOptions
  };
  if (!process.env.DB_LOGGING) {
    options['logging'] = false;
  }

  if (DB_PORT) {
    conn['port'] = DB_PORT;
  }
  return new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, options);
};
