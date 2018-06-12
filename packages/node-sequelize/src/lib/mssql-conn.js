const Sequelize = require('sequelize');
const host = process.env.DB_HOST;
const name = process.env.DB_NAME;
const connectionString = `Server=${host};Database=${name};Trusted_Connection=yes;`;
console.info('mssql connection', connectionString);

module.exports = () =>
  new Sequelize({
    dialect: 'mssql',
    dialectModulePath: 'sequelize-msnodesqlv8',
    logging: false,
    operatorsAliases: false,
    dialectOptions: {
      connectionString
    }
  });
