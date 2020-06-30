'use strict';

const parse = require('../parse');

describe('parse MOZAMBIQUE_TD1', () => {
  it('MOZAMBIQUE ID - valid', () => {
    const data = [
      'BIMOZ87587587<187587587<<<<<<<',
      '6510123F1405211MOZ11011101K<<7',
      'SPECIMEN<<SPECIMEN<SPECIMEN<<<'
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'MOZAMBIQUE_TD1',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'BI',
      issuingState: 'MOZ',
      documentNumber: '87587587',
      documentNumberCheckDigit: '1',
      birthDate: '651012',
      birthDateCheckDigit: '3',
      sex: 'female',
      optional1: '87587587',
      optional2: '11011101K',
      expirationDate: '140521',
      expirationDateCheckDigit: '1',
      nationality: 'MOZ',
      compositeCheckDigit: '7',
      lastName: 'SPECIMEN',
      firstName: 'SPECIMEN SPECIMEN'
    });
  });
});
