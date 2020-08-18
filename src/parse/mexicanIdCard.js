'use strict';

const { MEXICAN_ID_CARD } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const MexicanIdCardFields = require('./mexicanIdCardFields');

module.exports = function parseMexicanIdCard(lines) {
  lines = checkLines(lines);
  if (lines.length !== 3) {
    throw new Error(
      `invalid number of lines: ${lines.length}: Must be 3 for ${MEXICAN_ID_CARD}`
    );
  }
  lines.forEach((line, index) => {
    if (line.length !== 30) {
      throw new Error(
        `invalid number of characters for line ${index + 1}: ${
          line.length
        }. Must be 30 for ${MEXICAN_ID_CARD}`
      );
    }
  });
  return getResult(MEXICAN_ID_CARD, lines, MexicanIdCardFields);
};
