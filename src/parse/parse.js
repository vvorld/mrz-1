'use strict';

const formats = require('../formats');

const checkLines = require('./checkLines');
const parsers = require('./parsers');

function parseMRZ(lines) {
  lines = checkLines(lines);
  switch (lines.length) {
    case 1: {
      if (lines[0].match(/^D[1PN<][0-9A-Z<]{27}[0-9]$/)) {
        if (lines[0].match(/^D[1PN<]FRA/)) {
          return parsers.FRENCH_DRIVING_LICENSE(lines);
        }
        if (lines[0].match(/^D[1PN<]EST/)) {
          return parsers.ESTONIAN_DRIVING_LICENSE(lines);
        }
        if (lines[0].match(/^D[1PN<]NLD/)) {
          return parsers.NETHERLANDS_DRIVING_LICENSE(lines);
        }
        if (lines[0].match(/^D[1PN<][A-Z<]{12}[A-Z]{3}/)) {
          return parsers.IRELAND_DRIVING_LICENSE(lines);
        }
        if (lines[0].match(/^D[1PN<][0-9<]{27}[0-9]$/)) {
          return parsers.CROATIA_DRIVING_LICENSE(lines);
        }
        throw new Error(
          'unsupported country'
        );
      }
      throw new Error(
        'unrecognized document format. Input must match pattern /^D[1PN<][0-9A-Z<]{27}[0-9]$/ (ISO-compliant driving licence)'
      );
    }
    case 2:
    case 3: {
      switch (lines[0].length) {
        case 30:
          if (lines[0].match(/^[ACI].BWA/)) {
            return parsers.BOTSWANA_TD1(lines);
          }
          if (lines[0].match(/^[A-Z<]{2}MOZ/)) {
            return parsers.MOZAMBIQUE_TD1(lines);
          }
          if (lines[0].match(/^IDMEX/)) {
            return parsers.MEXICAN_ID_CARD(lines);
          }
          if (lines[0].match(/^I.CHL/)) {
            return parsers.CHILE_NATIONAL_ID(lines);
          }
          return parsers.TD1(lines);
        case 36: {
          if (lines[0].match(/^I.FRA/)) {
            return parsers.FRENCH_NATIONAL_ID(lines);
          } else {
            return parsers.TD2(lines);
          }
        }
        case 44:
          return parsers.TD3(lines);
        case 9:
          return parsers.SWISS_DRIVING_LICENSE(lines);
        default:
          throw new Error(
            'unrecognized document format. First line of input must have 30 (TD1), 36 (TD2 or French National Id), 44 (TD3) or 9 (Swiss Driving License) characters'
          );
      }
    }
    default:
      throw new Error(
        `unrecognized document format. Input must have two or three lines, found${
          lines.length
        }`
      );
  }
}

for (const format in formats) {
  parseMRZ[format] = parsers[format];
}

module.exports = parseMRZ;
