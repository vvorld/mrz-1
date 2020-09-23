'use strict';

const parse = require('../parse');

describe('parse KENYA_ID_CARD', () => {
  it('KENYA ID CARD - valid', () => {
    const data = [
      'IDKYA2333993336<<818<<<<<<<334',
      '8612227M1202225<B023551667Y<<6',
      'HAIM<MABIAH<ANONYIA<<<<<<<<<<<'
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'KENYA_ID_CARD',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'KYA',
      documentNumber: '233399333',
      documentNumberCheckDigit: '6',
      birthDate: '861222',
      birthDateCheckDigit: '7',
      sex: 'male',
      personalNumber: '23551667',
      optional1: '  818       334',
      compositeCheckDigit: '6',
      lastName: 'HAIM MABIAH ANONYIA',
      issueDate: '120222',
    });
  });
});
