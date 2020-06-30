'use strict';

const { CROATIA_DRIVING_LICENSE } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const croatiaDrivingLicenseFields = require('./croatiaDrivingLicenseFields');

module.exports = function parseEstonianDrivingLicense(lines) {
  lines = checkLines(lines);
  if (lines.length !== 1) {
    throw new Error(
      `invalid number of lines: ${
        lines.length
      }: Must be 1 for ${CROATIA_DRIVING_LICENSE}`
    );
  }
  if (lines[0].length !== 30) {
    throw new Error(
      `invalid number of characters for line: ${
        lines[0].length
      }. Must be 30 for ${CROATIA_DRIVING_LICENSE}`
    );
  }
  return getResult(CROATIA_DRIVING_LICENSE, lines, croatiaDrivingLicenseFields);
};
