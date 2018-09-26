require('dotenv').config();
const AD = require('@nelreina/node-ad-core');
const { decrypt } = require('@nelreina/node-crypto');
const Log4js = require('log4js');

Log4js.configure('./log4js.json');
const logger = Log4js.getLogger();

const pass = decrypt(process.env.AD_ADMIN_PWD);

// Your AD account should be a member
// of the Administrators group.
const ad = new AD({
  url: process.env.AD_URL,
  user: process.env.AD_ADMIN_USER,
  pass
});
const adGroup = process.env.AD_GROUP;
let error = false;

const login = async credentials => {
  const { username, password } = credentials;
  // first check if the group exists
  if (!(await ad.group(adGroup).exists())) {
    logger.error(`AD Group "${adGroup}" does not exists!`);
    error = true;
    throw new Error('You are not allowed to use this system');
  }
  // Check if user exists
  if (!error && !(await ad.user(username).exists())) {
    logger.error(`User "${username}" does not exists!`);
    throw new Error('You are not allowed to use this system');
  }
  // Check if user isMemberOf group
  if (!error && !(await ad.user(username).isMemberOf(adGroup))) {
    logger.error(`User "${username}" is not a member of group "${adGroup}"!`);
    throw new Error('You are not allowed to use this system');
  }
  // Login attempt
  if (!error && !(await ad.user(username).authenticate(password))) {
    logger.error(`Login attempt failed for User "${username}"!`);
    throw new Error('Invalid Username or Password');
  }
  const user = await ad.user(username).get();
  const ret = { username };
  ret['displayName'] = user.displayName;
  ret['email'] = user.userPrincipalName;
  return ret;
};

module.exports = { login };
