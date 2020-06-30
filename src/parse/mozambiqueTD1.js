'use strict';

const { MOZAMBIQUE_TD1 } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const MozambiqueTD1Fields = require('./mozambiqueTd1Fields');

module.exports = function parseMozambiqueTD1(lines) {
  lines = checkLines(lines);
  if (lines.length !== 3) {
    throw new Error(
      `invalid number of lines: ${lines.length}: Must be 3 for ${MOZAMBIQUE_TD1}`
    );
  }
  lines.forEach((line, index) => {
    if (line.length !== 30) {
      throw new Error(
        `invalid number of characters for line ${index + 1}: ${
          line.length
        }. Must be 30 for ${MOZAMBIQUE_TD1}`
      );
    }
  });
  return getResult(MOZAMBIQUE_TD1, lines, MozambiqueTD1Fields);
};
