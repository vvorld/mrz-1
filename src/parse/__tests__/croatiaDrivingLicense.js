'use strict';

const parse = require('../parse');

describe('parse Croatia Driving License', () => {
  it('valid MRZ', function () {
    const MRZ = ['D11000048690088298703300723<<6'];
    var result = parse(MRZ);
    expect(result.format).toBe('CROATIA_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '1',
      documentNumber: '10000486',
      expirationDate: '300723',
      compositeCheckDigit: '6'
    });
  });
});
