'use strict';

const parseDocumentCode = require('../parsers/euDrivingLicense/parseDocumentCode');
const parseBapConfiguration = require('../parsers/euDrivingLicense/parseBapConfiguration');
const parseState = require('../parsers/parseState');

const parseDocumentNumber = require('../parsers/euDrivingLicense/estonia/parseDocumentNumber');
const parsePersonalNumber = require('../parsers/euDrivingLicense/estonia/parsePersonalNumber');
const parseDocumentNumberCheckDigit = require('../parsers/euDrivingLicense/estonia/parseDocumentNumberCheckDigit');

const {
    documentCodeTemplate,
    bapConfigurationTemplate,
    issuingStateTemplate,
    documentNumberTemplate,
    personalNumberTemplate,
    compositeCheckDigitTemplate,
    documentNumberCheckDigitTemplate
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
        start: 5,
        end: 13,
        parser: parseDocumentNumber
    }),
    Object.assign({}, documentNumberCheckDigitTemplate, {
        line: 0,
        start: 13,
        end: 14,
        related: [
            {
                line: 0,
                start: 5,
                end: 13
            }
        ],
        parser: parseDocumentNumberCheckDigit
    }),
    Object.assign({}, personalNumberTemplate, {
        line: 0,
        start: 14,
        end: 29,
        parser: parsePersonalNumber
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
