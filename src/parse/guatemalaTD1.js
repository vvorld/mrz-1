'use strict';

const { GUATEMALA_TD1 } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const GuatemalaTD1Fields = require('./guatemalaTD1Fields');

module.exports = function parseGuatemalaTD1(lines) {
  lines = checkLines(lines);
  if (lines.length !== 3) {
    throw new Error(
      `invalid number of lines: ${lines.length}: Must be 3 for ${GUATEMALA_TD1}`
    );
  }
  lines.forEach((line, index) => {
    if (line.length !== 30) {
      throw new Error(
        `invalid number of characters for line ${index + 1}: ${
          line.length
        }. Must be 30 for ${GUATEMALA_TD1}`
      );
    }
  });
  const result = getResult(GUATEMALA_TD1, lines, GuatemalaTD1Fields);
  const expirationDateCheckDigit = result.details.find((x) => x.field === 'expirationDateCheckDigit');
  const birthDateCheckDigit = result.details.find((x) => x.field === 'birthDateCheckDigit');
  const documentNumberCheckDigit = result.details.find((x) => x.field === 'documentNumberCheckDigit');
  const compositeCheckDigitIndex = result.details.findIndex((x) => x.field === 'compositeCheckDigit');

  if (expirationDateCheckDigit && expirationDateCheckDigit.valid
  && birthDateCheckDigit && birthDateCheckDigit.valid
  && documentNumberCheckDigit && documentNumberCheckDigit.valid
  && (compositeCheckDigitIndex !== -1 && result.details[compositeCheckDigitIndex] && !result.details[compositeCheckDigitIndex].valid)) {
    const compositeCheckDigitValue = result.details[compositeCheckDigitIndex].ranges[0] ? result.details[compositeCheckDigitIndex].ranges[0].raw : null;
    result.details[compositeCheckDigitIndex].value = compositeCheckDigitValue;
    result.details[compositeCheckDigitIndex].valid = true;
    result.fields.compositeCheckDigit = Number(compositeCheckDigitValue);
    result.valid = true;
  }
  return result;
};
