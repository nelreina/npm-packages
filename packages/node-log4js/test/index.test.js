const log4js = require('../src/index');
const category = 'log';
describe('log4js with no options will init with console log by default', () => {
  test('should get a object', () => {
    expect(log4js()).toBeTruthy();
  });
});

describe('log4js should throw error when not init with plain object', () => {
  test('called with empty object', () => {
    expect(() => {
      log4js(category, {});
    }).toThrow();
  });
  test('called with an array', () => {
    expect(() => {
      log4js(category, [{ filename: '' }]);
    }).toThrow();
  });
});

describe('log4js with options.filename', () => {
  test('should throw error with an empty filename', () => {
    expect(() => {
      log4js(category, { configFilename: '' });
    }).toThrow();
  });
});
