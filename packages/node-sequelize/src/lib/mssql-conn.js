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

      const trustedConn = `Server=${DB_HOST};Database=${DB_NAME};Trusted_Connection=yes;`;
      const authConn = `Server=${DB_HOST};Database=${DB_NAME};Username:${DB_USERNAME};`;

      const integrated = DB_INTEGRATED === 'Y';
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

      const sequelize = new Sequelize(conn);
      // await sequelize.authenticate();
      logger.info(
        `mssql connect success ${integrated ? trustedConn : authConn}`
      );
      resolve(sequelize);
    } catch (error) {
      reject(error);
    }
  });
