require('dotenv').config();
const Sequelize = require('sequelize');

const defaultOptions = {
  dialect: process.env.DB_DIALECT,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD
};

module.exports = (options = defaultOptions, logger = console) => {
  const { dialect, dbName, dbHost, dbUsername, dbPassword } = options;
  if (!dialect) {
    throw new Error('Please provide a dialect (mysql|sqlite|postgres) !');
  }
  if (dialect === 'mssql') {
    throw new Error('Please use "mssql-conn" object in this library!');
  }

  try {
    const authConn = `Server=${dbHost};Database=${dbName};Username:${dbUsername};`;

    logger.info(`${dialect} connection: ${authConn}`);
    const options = { dialect };
    options['operatorsAliases'] = false;
    options['logging'] = false;
    options['host'] = dbHost;
    const db = new Sequelize(dbName, dbUsername, dbPassword, options);
    db.authenticate();
    return db;
  } catch (error) {
    throw new Error(error.message);
  }
};
