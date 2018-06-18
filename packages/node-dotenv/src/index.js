const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { each, assign } = require('lodash');
const { EOL } = require('os');
const S = require('string');
const { encrypt } = require('@nelreina/node-crypto');

S.extendPrototype();
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const fileExists = promisify(fs.exists);

module.exports = async (dirname, envs) => {
  const dotenvFile = path.resolve(dirname, './.env');
  const existingEnvs = {};
  if (await fileExists(dotenvFile)) {
    const envArray = (await readFile(dotenvFile)).toString().split(EOL);
    envArray.forEach(line => {
      if (line.contains('=')) {
        const [key, value] = line.split('=');
        /*eslint-disable */
        existingEnvs[key] = value.replaceAll(`'`, '');
        /*eslint-enable */
      }
    });
  }
  let text = '';
  each(assign({}, existingEnvs, envs), (value, key) => {
    if (key.contains('PWD') || key.contains('PASSWORD')) {
      const hashedValue = encrypt(value);
      text += `${key}='${hashedValue}'${EOL}`;
    } else {
      text += `${key}='${value}'${EOL}`;
    }
  });
  await writeFile(dotenvFile, text);
  return true;
};
