'use strict';

const parse = require('../parse');

describe('parse Estonian Driving License', () => {
  it('valid MRZ', function () {
    const MRZ = ['D<ESTET000000<49307039909<<<<6'];
    var result = parse(MRZ);
    expect(result.format).toBe('ESTONIAN_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '<',
      issuingState: 'EST',
      documentNumber: 'ET000000',
      documentNumberCheckDigit: '<',
      personalNumber: '49307039909',
      compositeCheckDigit: '6'
    });
  });
});
