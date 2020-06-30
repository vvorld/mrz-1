'use strict';

const parse = require('../parse');

describe('parse French Driving License', () => {
  it('valid MRZ', function () {
    const MRZ = ['D1FRA13AA000026180915MARTIN<<5'];
    var result = parse(MRZ);
    expect(result.format).toBe('FRENCH_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '1',
      issuingState: 'FRA',
      documentNumber: '13AA00002',
      expirationDate: '180915',
      lastName: 'MARTIN',
      compositeCheckDigit: '5'
    });
  });
});
