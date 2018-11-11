const xml2js = require('xml2js');

module.exports = json => {
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(json);
  return xml;
};
