require('dotenv').config();
const Sequelize = require('sequelize');

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_INTEGRATED = process.env.DB_INTEGRATED;

module.exports = (DB_NAME = process.env.DB_NAME, logger = console) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!DB_INTEGRATED) {
        reject({ message: 'ERR: env variable DB_INTEGRATED is required!' });
      }
      let sequelize;
      const authConn = `Server=${DB_HOST};Database=${DB_NAME};Username:${DB_USERNAME};`;

      const conn = {};
      conn['dialect'] = 'mssql';
      conn['operatorsAliases'] = false;
      conn['logging'] = false;
      const dialectOptions = {
        encrypt: true,
        requestTimeout: 0,
        connectTimeout: 0
      };
      const pool = {
        max: process.env.DB_POOL_MAX || 5,
        min: process.env.DB_POOL_MIN || 0,
        idle: process.env.DB_POOL_IDLE || 20000,
        acquire: process.env.DB_POOL_ACQUIRE || 20000
      };
      const options = {
        host: DB_HOST,
        dialect: 'mssql',
        operatorsAliases: false,
        logging: false,
        pool,
        dialectOptions
      };
      if (DB_PORT) {
        options['port'] = DB_PORT;
      }

      sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, options);

      await sequelize.authenticate();
      logger.info(`mssql connect success ${authConn}`);
      resolve(sequelize);
    } catch (error) {
      reject(error);
    }
  });
