'use strict';

const parse = require('./../parse');

describe('parse Chile National ID', () => {
  it('Chile ID - valid', () => {
    const data = [
      'IDCHL1000001750A01<<<<<<<<<<<<',
      '8302216F2302214CHL12749625<0<3',
      'FREDEZ<VIDAL<<MARCELA<CAROLINA',
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'CHILE_NATIONAL_ID',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'CHL',
      personalNumber: '100000175',
      personalNumberCheckDigit: '0',
      documentNumber: '12749625 0',
      birthDate: '830221',
      birthDateCheckDigit: '6',
      expirationDate: '230221',
      expirationDateCheckDigit: '4',
      nationality: 'CHL',
      optional1: 'A01',
      compositeCheckDigit: '3',
      lastName: 'FREDEZ VIDAL',
      firstName: 'MARCELA CAROLINA',
      sex: 'female',
    });
  });
});

