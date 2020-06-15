'use strict';

const code = require('./code');

module.exports = function check(string, value) {
  var codeValue = code(string);
  if (codeValue !== Number(value)) {
    codeValue = code(string.replace(/</g, ''));
    if (codeValue !== Number(value)) {
      throw new Error(`invalid check digit: ${value}. Must be ${codeValue}`);
    }
  }
};
