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

  it.each([
    [
      [
        'IDKYA2485072664<<3981<<<<<3981',
        '9710038M1810150<B037622929I<<1',
        'ASFOWF<JSFIVQ<RONTWO<<<<<<<<<<'
      ], '4', '8', '1'
    ],
    [
      [
        'IDKYA2498088566<<22D1<<<<<4771',
        '0106164M1907243<B038344903X<<0',
        'ASFOWF<JSFIVQ<RONTWO<<<<<<<<<<'
      ], '6', '4', '0'
    ],
    [
      [
        'IDKYA2304830190<<414<<<<<<<471',
        '9408300F1209280<B030857540L<<9',
        'ASFOWF<JSFIVQ<RONTWO<<<<<<<<<<'
      ], '0', '0', '9'
    ]

  ])('check digits for KEN ID', (data, documentNumberCheckDigit, birthDateCheckDigit, compositeCheckDigit) => {
    const result = parse(data);
    expect(result.fields).toMatchObject({
      documentNumberCheckDigit,
      birthDateCheckDigit,
      compositeCheckDigit,
    });
  });
});
