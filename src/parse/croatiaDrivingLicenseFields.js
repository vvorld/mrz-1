'use strict';

const parseDocumentCode = require('../parsers/euDrivingLicense/parseDocumentCode');
const parseBapConfiguration = require('../parsers/euDrivingLicense/parseBapConfiguration');
const parseDocumentNumber = require('../parsers/parseDocumentNumber');

const {
  documentCodeTemplate,
  bapConfigurationTemplate,
  expirationDateTemplate,
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
  Object.assign({}, documentNumberTemplate, {
    line: 0,
    start: 2,
    end: 10,
    parser: parseDocumentNumber
  }),
  Object.assign({}, expirationDateTemplate, {
    line: 0,
    start: 21,
    end: 27
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
