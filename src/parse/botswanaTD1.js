'use strict';

const { BOTSWANA_TD1 } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const BotswanaTD1Fields = require('./botswanaTd1Fields');

module.exports = function parseBotswanaTD1(lines) {
  lines = checkLines(lines);
  if (lines.length !== 3) {
    throw new Error(
      `invalid number of lines: ${lines.length}: Must be 3 for ${BOTSWANA_TD1}`
    );
  }
  lines.forEach((line, index) => {
    if (line.length !== 30) {
      throw new Error(
        `invalid number of characters for line ${index + 1}: ${
          line.length
        }. Must be 30 for ${BOTSWANA_TD1}`
      );
    }
  });
  return getResult(BOTSWANA_TD1, lines, BotswanaTD1Fields);
};
