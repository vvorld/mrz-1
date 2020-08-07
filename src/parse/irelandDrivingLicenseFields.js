'use strict';

const parseDocumentCode = require('../parsers/euDrivingLicense/parseDocumentCode');
const parseBapConfiguration = require('../parsers/euDrivingLicense/parseBapConfiguration');
const parseLastName = require('../parsers/euDrivingLicense/parseLastName');
const parseState = require('../parsers/parseState');
const parseDocumentNumber = require('../parsers/euDrivingLicense/parseDocumentNumber');


const {
  documentCodeTemplate,
  bapConfigurationTemplate,
  nationalityTemplate,
  documentNumberTemplate,
  // TODO find algorithm for checkDigit, ignore for now
  // documentNumberCheckDigitTemplate,
  lastNameTemplate,
  compositeCheckDigitTemplate
} = require('./fieldTemplates');
const createFieldParser = require('./createFieldParser');

module.exports = [
  Object.assign({}, documentCodeTemplate, {
    line: 0,
    start: 0,
    end: 1,
    parser: parseDocumentCode
  }),
  Object.assign({}, bapConfigurationTemplate, {
    line: 0,
    start: 1,
    end: 2,
    parser: parseBapConfiguration
  }),
  Object.assign({}, lastNameTemplate, {
    line: 0,
    start: 2,
    end: 14,
    parser: parseLastName
  }),
  Object.assign({}, nationalityTemplate, {
    line: 0,
    start: 14,
    end: 17,
    parser: parseState
  }),
  Object.assign({}, documentNumberTemplate, {
    line: 0,
    start: 18,
    end: 28,
    parser: parseDocumentNumber
  }),
  // TODO find algorithm for checkDigit, ignore for now
  /* Object.assign({}, documentNumberCheckDigitTemplate, {
    line: 0,
    start: 28,
    end: 29,
    related: [
      {
        line: 0,
        start: 18,
        end: 28
      }
    ]
  }),*/
  Object.assign({}, compositeCheckDigitTemplate, {
    line: 0,
    start: 29,
    end: 30,
    related: [
      {
        line: 0,
        start: 0,
        end: 29
      }
    ]
  })
].map(createFieldParser);
