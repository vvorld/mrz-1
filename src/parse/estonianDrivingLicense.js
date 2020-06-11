'use strict';

const checkLines = require('./checkLines');
const getResult = require('./getResult');
const { ESTONIAN_DRIVING_LICENSE } = require('../formats');
const estonianDrivingLicenseFields = require('./estonianDrivingLicenseFields');

module.exports = function parseEstonianDrivingLicense(lines) {
    lines = checkLines(lines);
    if (lines.length !== 1) {
        throw new Error(
            `invalid number of lines: ${
                lines.length
            }: Must be 1 for ${ESTONIAN_DRIVING_LICENSE}`
        );
    }
    if (lines[0].length !== 30) {
        throw new Error(
            `invalid number of characters for line: ${
                lines[0].length
            }. Must be 30 for ${ESTONIAN_DRIVING_LICENSE}`
        );
    }
    return getResult(ESTONIAN_DRIVING_LICENSE, lines, estonianDrivingLicenseFields);
};
