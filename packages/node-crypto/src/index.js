const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const phrase = process.env.PHRASE || '';

const encrypt = text => {
  var cipher = crypto.createCipher(algorithm, phrase);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = text => {
  var decipher = crypto.createDecipher(algorithm, phrase);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

module.exports = {
  encrypt,
  decrypt
};
