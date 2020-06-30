'use strict';

var check = require('../../check');

module.exports = function parseDocumentNumberCheckDigit(
  checkDigit,
  source
) {
  if (checkDigit === '<') {
    return checkDigit;
  } else {
    check(source, checkDigit);
    return checkDigit;
  }
};
