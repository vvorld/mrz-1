'use strict';

const code = require('./code');

module.exports = function check(string, value) {
  var codeValue = code(string);
  if (codeValue !== Number(value)) {
    const clearValue = string.replace(/</g, '');
    if (clearValue === '' && value === '<') {
      return;
    }
    codeValue = code(clearValue);
    if (codeValue !== Number(value)) {
      throw new Error(`invalid check digit: ${value}. Must be ${codeValue}`);
    }
  }
};
