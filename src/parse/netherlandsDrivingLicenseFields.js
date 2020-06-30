'use strict';

const parseDocumentCode = require('../parsers/euDrivingLicense/parseDocumentCode');
const parseBapConfiguration = require('../parsers/euDrivingLicense/parseBapConfiguration');
const parseState = require('../parsers/parseState');
const parseDocumentNumber = require('../parsers/euDrivingLicense/parseDocumentNumber');


const {
  documentCodeTemplate,
  bapConfigurationTemplate,
  issuingStateTemplate,
  documentNumberTemplate,
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
  Object.assign({}, issuingStateTemplate, {
    line: 0,
    start: 2,
    end: 5,
    parser: parseState
  }),
  Object.assign({}, documentNumberTemplate, {
    line: 0,
    start: 6,
    end: 16,
    parser: parseDocumentNumber
  }),
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
