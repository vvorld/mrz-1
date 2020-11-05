'use strict';

const parseDocumentCode = require('../parsers/parseDocumentCodeId');
const parseDocumentNumberOptional = require('../parsers/parseDocumentNumberOptional');

const {
  documentCodeTemplate,
  issuingStateTemplate,
  documentNumberTemplate,
  documentNumberCheckDigitTemplate,
  birthDateTemplate,
  birthDateCheckDigitTemplate,
  sexTemplate,
  issueDateTemplate,
  compositeCheckDigitTemplate,
  lastNameTemplate,
  personalNumberTemplate,
} = require('./fieldTemplates');
const createFieldParser = require('./createFieldParser');

module.exports = [
  Object.assign({}, documentCodeTemplate, {
    line: 0,
    start: 0,
    end: 2,
    parser: parseDocumentCode
  }),
  Object.assign({}, issuingStateTemplate, {
    line: 0,
    start: 2,
    end: 5
  }),
  Object.assign({}, documentNumberTemplate, {
    line: 0,
    start: 5,
    end: 14,
    related: [
      {
        line: 0,
        start: 14,
        end: 15
      },
      {
        line: 0,
        start: 15,
        end: 30
      }
    ]
  }),
  Object.assign(documentNumberCheckDigitTemplate, {
    line: 0,
    start: 14,
    end: 15,
    related: [
      {
        line: 0,
        start: 5,
        end: 14
      },
      {
        line: 0,
        start: 15,
        end: 30
      }
    ]
  }),
  {
    label: 'Optional field 1',
    field: 'optional1',
    line: 0,
    start: 15,
    end: 30,
    related: [
      {
        line: 0,
        start: 5,
        end: 14
      },
      {
        line: 0,
        start: 14,
        end: 15
      }
    ],
    parser: parseDocumentNumberOptional
  },
  Object.assign({}, birthDateTemplate, {
    start: 0,
    end: 6,
    line: 1
  }),
  Object.assign({}, birthDateCheckDigitTemplate, {
    line: 1,
    start: 6,
    end: 7,
    related: [
      {
        line: 1,
        start: 0,
        end: 6
      }
    ]
  }),
  Object.assign({}, sexTemplate, {
    line: 1,
    start: 7,
    end: 8
  }),
  Object.assign({}, issueDateTemplate, {
    line: 1,
    start: 8,
    end: 14
  }),
  Object.assign({}, personalNumberTemplate, {
    line: 1,
    start: 18,
    end: 26,
    parser: parseDocumentNumberOptional,
  }),
  Object.assign({}, compositeCheckDigitTemplate, {
    line: 1,
    start: 29,
    end: 30,
    related: [
      {
        line: 0,
        start: 5,
        end: 30
      },
      {
        line: 1,
        start: 0,
        end: 7
      },
      {
        line: 1,
        start: 8,
        end: 15
      },
      {
        line: 1,
        start: 17,
        end: 29
      }
    ]
  }),
  Object.assign({}, lastNameTemplate, {
    line: 2,
    start: 0,
    end: 30
  }),
].map(createFieldParser);
