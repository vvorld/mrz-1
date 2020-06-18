'use strict';

const parse = require('../parse');

describe('parse BOTSWANA_TD1', () => {
  it('botswana ID - valid', () => {
    const data = [
      'ACBWAS1690000<8618888104<<<<<<',
      '6611215F1910027BWA03300777<<<5',
      'TOPIPENG<<TEPOLO<LEARI<<<<<<<<'
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'BOTSWANA_TD1',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'AC',
      issuingState: 'BWA',
      personalNumber: 'S1690000',
      personalNumberCheckDigit: '8',
      documentNumber: '618888104',
      birthDate: '661121',
      birthDateCheckDigit: '5',
      sex: 'female',
      expirationDate: '191002',
      expirationDateCheckDigit: '7',
      nationality: 'BWA',
      optional2: '03300777',
      compositeCheckDigit: '5',
      lastName: 'TOPIPENG',
      firstName: 'TEPOLO LEARI'
    });
  });
});
