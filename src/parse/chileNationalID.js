'use strict';

const { CHILE_NATIONAL_ID } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const chileIDFields = require('./chileNationalIDFields');

module.exports = function parseTD1(lines) {
  lines = checkLines(lines);
  if (lines.length !== 3) {
    throw new Error(
      `invalid number of lines: ${lines.length}: Must be 3 for ${CHILE_NATIONAL_ID}`
    );
  }
  lines.forEach((line, index) => {
    if (line.length !== 30) {
      throw new Error(
        `invalid number of characters for line ${index + 1}: ${
          line.length
        }. Must be 30 for ${CHILE_NATIONAL_ID}`
      );
    }
  });
  return getResult(CHILE_NATIONAL_ID, lines, chileIDFields);
};
