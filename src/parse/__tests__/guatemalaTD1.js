'use strict';

const parse = require('../parse');

describe('parse guatemala TD1', () => {
  it('valid id card', function () {
    const MRZ = [
      'IDGTM20519899670101S0101<<<001',
      '8010306F2201258GTM<<1050078438',
      'EJEMPLO<<EJEMPLO<<<<<<<<<<<<<<',
    ];
    var result = parse(MRZ);
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'GTM',
      documentNumber: '2051989960101',
      documentNumberCheckDigit: '7',
      optional1: '0101S0101   001',
      birthDate: '801030',
      birthDateCheckDigit: '6',
      sex: 'female',
      expirationDate: '220125',
      expirationDateCheckDigit: '8',
      nationality: 'GTM',
      optional2: '  105007843',
      compositeCheckDigit: 8,
      lastName: 'EJEMPLO',
      firstName: 'EJEMPLO'
    });
  });
});
