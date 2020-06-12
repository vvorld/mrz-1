'use strict';

const { IRELAND_DRIVING_LICENSE } = require('../formats');

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const irelandDrivingLicenseFields = require('./irelandDrivingLicenseFields');

module.exports = function parseIrelandDrivingLicense(lines) {
  lines = checkLines(lines);
  if (lines.length !== 1) {
    throw new Error(
      `invalid number of lines: ${
        lines.length
      }: Must be 1 for ${IRELAND_DRIVING_LICENSE}`
    );
  }
  if (lines[0].length !== 30) {
    throw new Error(
      `invalid number of characters for line: ${
        lines[0].length
      }. Must be 30 for ${IRELAND_DRIVING_LICENSE}`
    );
  }
  return getResult(IRELAND_DRIVING_LICENSE, lines, irelandDrivingLicenseFields);
};
