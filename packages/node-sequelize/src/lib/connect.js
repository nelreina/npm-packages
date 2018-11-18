require('dotenv').config();
const Sequelize = require('sequelize');

const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = (dialect, DB_NAME = process.env.DB_NAME, logger = console) =>
  new Promise(async (resolve, reject) => {
    if (!dialect) {
      reject({ message: 'Please provide a dialect (mysql|sqlite|postgres) !' });
      return;
    }
    if (dialect === 'mssql') {
      reject({ message: 'Please use "mssql-conn" object in this library!' });
      return;
    }

    try {
      const authConn = `Server=${DB_HOST};Database=${DB_NAME};Username:${DB_USERNAME};`;

      logger.info(`${dialect} connection: ${authConn}`);
      const options = { dialect };
      options['operatorsAliases'] = false;
      options['logging'] = false;
      const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, options);
      await db.authenticate();
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });
