require('dotenv').config();
const Sequelize = require('sequelize');

const defaultOptions = {
  dialect: process.env.DB_DIALECT,
  dbName: process.env.DB_NAME,
  logger: console,
  dbHost: process.env.DB_HOST,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD
};

module.exports = (options = defaultOptions) =>
  new Promise(async (resolve, reject) => {
    const { dialect, dbName, dbHost, dbUsername, dbPassword, logger } = options;
    if (!dialect) {
      reject({ message: 'Please provide a dialect (mysql|sqlite|postgres) !' });
      return;
    }
    if (dialect === 'mssql') {
      reject({ message: 'Please use "mssql-conn" object in this library!' });
      return;
    }

    try {
      const authConn = `Server=${dbHost};Database=${dbName};Username:${dbUsername};`;

      logger.info(`${dialect} connection: ${authConn}`);
      const options = { dialect };
      options['operatorsAliases'] = false;
      options['logging'] = false;
      const db = new Sequelize(dbName, dbUsername, dbPassword, options);
      await db.authenticate();
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });
