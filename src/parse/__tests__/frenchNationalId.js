'use strict';

const parse = require('../parse');

describe('parse French National Id', () => {
  it('valid MRZ', function () {
    const MRZ = [
      'IDFRATEST<NAME<<<<<<<<<<<<<<<<0CHE02',
      '1710GVA123451ROBERTA<<<<<<<9112311F2'
    ];
    var result = parse(MRZ);
    expect(result.format).toBe('FRENCH_NATIONAL_ID');
    // expect(result.valid).toEqual(true);
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'FRA',
      lastName: 'TEST NAME',
      administrativeCode: '0CHE02',
      issueDate: '1710',
      administrativeCode2: 'GVA',
      documentNumber: '1710GVA12345',
      documentNumberCheckDigit: '1',
      firstName: 'ROBERTA',
      birthDate: '911231',
      birthDateCheckDigit: '1',
      sex: 'female',
      compositeCheckDigit: '2'
    });
  });

  it('valid MRZ of version without administrativeCode', function () {
    const MRZ = [
      'IDFRABERTHIER<<<<<<<<<<<<<<<<<<<<<<<',
      '9409923102854CORINNE<<<<<<<6512068F4'
    ];
    var result = parse(MRZ);
    expect(result.format).toBe('FRENCH_NATIONAL_ID');
    // expect(result.valid).toEqual(true);
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'FRA',
      lastName: 'BERTHIER',
      administrativeCode: '',
      issueDate: '9409',
      administrativeCode2: '923',
      documentNumber: '940992310285',
      documentNumberCheckDigit: '4',
      firstName: 'CORINNE',
      birthDate: '651206',
      birthDateCheckDigit: '8',
      sex: 'female',
      compositeCheckDigit: '4'
    });
  });


  it('valid id card', function () {
    const MRZ = [
      'RPESTBB00308371<<<<<<<<<<<<<<<',
      '8511294M2204053RUS<<<<<<<<<<<2',
      'POPOV<<VLADIMIR<<<<<<<<<<<<<<<',
    ];
    var result = parse(MRZ);
    // expect(result.valid).toEqual(true);
    expect(result.details.filter((a) => !a.valid)).toHaveLength(0);
    expect(result.fields).toEqual({
      "birthDate": "851129",
       "birthDateCheckDigit": "4",
       "compositeCheckDigit": "2",
       "documentCode": "RP",
       "documentNumber": "BB0030837",
        "documentNumberCheckDigit": "1",
        "expirationDate": "220405",
        "expirationDateCheckDigit": "3",
        "firstName": "VLADIMIR",
        "issuingState": "EST",
        "lastName": "POPOV",
        "nationality": "RUS",
        "optional1": "",
        "optional2": "",
        "sex": "male",
        });
  });
});
