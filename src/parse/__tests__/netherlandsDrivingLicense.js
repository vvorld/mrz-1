'use strict';

const parse = require('../parse');

describe('parse Netherlands Driving License', () => {
  it('valid MRZ', function () {
    const MRZ = ['D1NLD250949621112HF7W55VL42L21'];
    var result = parse(MRZ);
    expect(result.format).toBe('NETHERLANDS_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '1',
      issuingState: 'NLD',
      documentNumber: '5094962111',
      compositeCheckDigit: '1'
    });
  });
});
