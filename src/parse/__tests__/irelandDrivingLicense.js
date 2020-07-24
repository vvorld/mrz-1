'use strict';

const parse = require('../parse');

describe('parse Ireland Driving License', () => {
  it('valid MRZ', function () {
    const MRZ = ['D<DELAHUNTY<<<IRL<00000D90W000'];
    var result = parse(MRZ);
    expect(result.format).toBe('IRELAND_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '<',
      lastName: 'DELAHUNTY',
      nationality: 'IRL',
      documentNumber: '00000D90W0',
      compositeCheckDigit: '0'
    });
  });

  it('valid MRZ in ireland driving license with portugal nationality', function () {
    const MRZ = ['D<DELAHUNTY<<<PRT<00000D90W001'];
    var result = parse(MRZ);
    expect(result.format).toBe('IRELAND_DRIVING_LICENSE');
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'D',
      bapConfiguration: '<',
      lastName: 'DELAHUNTY',
      nationality: 'PRT',
      documentNumber: '00000D90W0',
      compositeCheckDigit: '1'
    });
  });
});
