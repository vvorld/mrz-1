'use strict';

const parse = require('../parse');

describe('parse French Resident Permit', () => {
  it('valid MRZ', function () {
    const MRZ = [
      'TSFRABRIKI<<KAMAL<<<<<<<<<<<<<<<<<<<',
      '4030058415MAR8205269M2102089<<<<<<13'
    ];
    const result = parse(MRZ);
    expect(result.format).toBe('TD2');
    expect(result.valid).toStrictEqual(true);
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'TS',
      issuingState: 'FRA',
      lastName: 'BRIKI',
      firstName: 'KAMAL',
      documentNumber: '403005841',
      documentNumberCheckDigit: '5',
      nationality: 'MAR',
      birthDate: '820526',
      birthDateCheckDigit: '9',
      sex: 'male',
      expirationDate: '210208',
      expirationDateCheckDigit: '9',
      optional: '      1',
      compositeCheckDigit: '3'
    });
  });
});
